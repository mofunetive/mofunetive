import { Github, Member } from "@mofunetive/metadata";
import { Organization, OrganizationMemberEdge, Repository, UserStatusEdge } from "@octokit/graphql-schema";
import { Octokit } from "@octokit/rest";

import type { GetAll, GetImages, GetMembers, GetProject, GetRepository, Octokit as OctokitType } from "./types.d.ts";

/**
 * @desc GitHub API
 * @example new GitHubAPI;
 */
export class GitHubAPI {
	public debug = false;
	private octokit: Octokit;
	private members: GetMembers["response"] = [];
	private project: GetProject["response"] = [];

	/**
	 * @param token
	 */
	constructor(token: string) {
		this.octokit = new Octokit({
			auth: token,
		});
	}

	/**
	 * @desc Gets All
	 * @param {GetAll["parameters"]}
	 * @returns
	 */
	public async GetAll(options?: GetAll["parameters"]): Promise<GetAll["response"]> {
		return {
			Members: await this.GetMembers(),
			Repository: await this.GetRepo(options?.Repository),
		};
	}

	/**
	 * @desc Gets All Organizations Repository
	 * @example await GetRepo(options?: OrganizationsReposParameters);
	 * @param {OctokitType["parameters"]["OrganizationsRepos"]}
	 * @returns
	 */
	public async GetRepo(options?: GetRepository["parameters"]): Promise<OctokitType["response"]["OrganizationsRepos"]["data"]> {
		console.debug("[API]:GetRepo");
		return this.octokit
			.request(
				`GET /orgs/${Github.name}/repos`,
				options ??
					({
						type: "public",
					} as OctokitType["parameters"]["OrganizationsRepos"]),
			)
			.then((repos: OctokitType["response"]["OrganizationsRepos"]) => repos.data);
	}

	/**
	 * @desc Gets All Members in Organizations
	 * @example await GetMembers();
	 * @returns
	 */
	public async GetMembers(): Promise<GetMembers["response"]> {
		console.debug("[API]:GetMembers");
		return this.GetMembersGraphql().then(async (members) => {
			if (members.memberStatuses.length !== this.members.length) {
				for (const key of members.memberStatuses) {
					await this.octokit.request(`GET /users/${key.node.user.login}`).then((user: OctokitType["response"]["User"]) => {
						this.members.push(
							Member[key.node.user.login.toLowerCase()]
								? {
										...user.data,
										metadata: Member[key.node.user.login.toLowerCase()],
									}
								: {
										...user.data,
										// eslint-disable-next-line unicorn/no-null
										metadata: null,
									},
						);
					});
				}
			}

			const sortedMembersWithRole = members.membersWithRole.sort((a, b) => {
				if (a.role === "ADMIN" && b.role !== "ADMIN") return -1;
				if (a.role !== "ADMIN" && b.role === "ADMIN") return 1;
				return a.node.login.localeCompare(b.node.login);
			});

			this.members = sortedMembersWithRole
				.map((member) => {
					return this.members.find((m) => m.login === member.node.login);
				})
				.filter(Boolean);

			const lockedIds = new Set([53_619_535, 48_393_914]);
			const priorityIds = [53_619_535, 48_393_914];

			this.members.sort((a, b) => {
				const aId = Number(a.id);
				const bId = Number(b.id);

				const aPriority = lockedIds.has(aId) ? priorityIds.indexOf(aId) : Infinity;
				const bPriority = lockedIds.has(bId) ? priorityIds.indexOf(bId) : Infinity;

				if (aPriority !== bPriority) return aPriority - bPriority;

				return aId - bId;
			});

			return this.members;
		});
	}

	/**
	 * @desc Gets All Project
	 * @example await GetProject();
	 * @returns
	 */
	public async GetProject(): Promise<GetProject["response"]> {
		const user = new Set(
			this.members.map((members) => {
				return members.login;
			}) ??
				(await this.GetMembers().then((members) => {
					return members.map((value) => value.login);
				})),
		);

		for (const key of this.members ?? (await this.GetMembers())) {
			await this.octokit
				.request(`GET /users/${key.login}/repos`, {
					type: "owner",
					sort: "updated",
				} as OctokitType["parameters"]["UserRepos"])
				.then(async (repos: OctokitType["response"]["UserRepos"]) => {
					for (const repository of repos.data) {
						if (repository.topics.includes(Github.name)) {
							this.project.push(
								Object.assign(repository, {
									images: await this.GetImages(repository.owner.login, repository.name),
								}),
							);
						} else if (repository.fork) {
							undefined;
						} else {
							await this.GetContributors(repository.owner.login, repository.name).then(async (contributors) => {
								if (contributors) {
									for (const iterator of contributors.filter((value) => value.node.login)) {
										if (!user.has(iterator.node.login)) return;
										this.project.push(
											Object.assign(repository, {
												images: await this.GetImages(repository.owner.login, repository.name),
											}),
										);
									}
								}
							});
						}
					}
				});
		}
		return this.project;
	}

	/**
	 * @desc Gets Images From README.md
	 * @example await GetImages();
	 * @param {string} [owner]
	 * @param {string} [repo]
	 * @returns
	 */
	protected async GetImages(owner: string, repo: string): Promise<GetImages["response"]["images"]> {
		try {
			return this.octokit.repos
				.getContent({
					owner,
					repo,
					path: "README.md",
					mediaType: {
						format: "raw",
					},
				})
				.catch(() => {
					return;
				})
				.then((value) => {
					if (!value) return "https://avatars.githubusercontent.com/u/109919769";
					// /!\[[^\]]*]\((.*?)\s*(".*[^"]")?\s*\)/;
					const regex = /(https:)([\s\w./|-])*\.(?:jpg|gif|png)/g;
					if (regex.test(value.data?.toString())) {
						return regex.exec(value.data?.toString())[0]?.toString() ?? undefined;
					}
				});
		} catch {
			return;
		}
	}

	protected async GetMembersGraphql(options?: { details?: boolean }): Promise<{
		memberStatuses: UserStatusEdge[];
		membersWithRole: OrganizationMemberEdge[];
	}> {
		return this.octokit
			.graphql<{
				organization: Organization;
			}>({
				query: /* GraphQL */ `
					query GetMembers($login: String = "mofunetive", $details: Boolean = false) {
						organization(login: $login) {
							memberStatuses(first: 100) {
								edges {
									node {
										user {
											login
										}
										user @include(if: $details) {
											name
											bio
											email
										}
									}
								}
							}
							membersWithRole(first: 100) {
								edges {
									node {
										login
									}
									role
								}
							}
						}
					}
				`,
				details: options?.details,
			})
			.then((value) => {
				value.organization.memberStatuses.edges = value.organization.memberStatuses.edges.filter((edge) => edge.node.user.login !== "MofuNetiveTeam");
				value.organization.membersWithRole.edges = value.organization.membersWithRole.edges.filter((edge) => edge.node.login !== "MofuNetiveTeam");

				return {
					memberStatuses: value.organization.memberStatuses.edges,
					membersWithRole: value.organization.membersWithRole.edges,
				};
			});
	}

	protected async GetContributors(owner: string, name: string) {
		try {
			return await this.octokit
				.graphql<{
					repository: Repository;
				}>({
					query: /* GraphQL */ `
						query GetContributors($name: String!, $owner: String!) {
							repository(name: $name, owner: $owner) {
								collaborators(first: 100, affiliation: OUTSIDE) {
									totalCount
									edges {
										node {
											... on User {
												login
											}
										}
									}
								}
							}
						}
					`,
					owner,
					name,
				})
				.then((value) => {
					if (value.repository.collaborators.edges.length === 0) return;
					return value.repository.collaborators.edges;
				});
		} catch {
			return;
		}
	}
}
