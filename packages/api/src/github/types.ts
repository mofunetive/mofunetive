import type { MemberInfo } from "@mofunetive/metadata";
import type { components, operations } from "@octokit/openapi-types";
import type { Endpoints } from "@octokit/types";

export interface GetAll {
	parameters: { Repository?: GetRepository["parameters"] };
	response: {
		Members: GetMembers["response"];
		Repository: GetRepository["response"];
	};
}

export interface GetMembers {
	response: (Octokit["response"]["User"]["data"] & { metadata: MemberInfo | null })[];
}
export interface GetRepository {
	parameters: {
		options?: Octokit["parameters"]["OrganizationsRepos"];
	};
	response: Octokit["response"]["OrganizationsRepos"]["data"];
}
export interface GetProject {
	response: components["schemas"]["minimal-repository"][] & GetImages["response"][];
}
export interface GetImages {
	parameters: {
		owner: string;
		repo: string;
	};
	response: {
		/**
		 * Format: uri
		 * @example https://user-images.githubusercontent.com/0/0.png
		 */
		images: string;
	};
}
// @octokit/types
export interface Octokit {
	parameters: {
		OrganizationsRepos: operations["repos/list-for-org"]["parameters"]["query"];
		UserRepos: operations["repos/list-for-user"]["parameters"]["query"];
	};
	response: {
		OrganizationsMembers: Endpoints["GET /orgs/{org}/members"]["response"];
		OrganizationsRepos: Endpoints["GET /orgs/{org}/repos"]["response"];
		ReposContributors: Endpoints["GET /repos/{owner}/{repo}/contributors"]["response"];
		User: Endpoints["GET /users/{username}"]["response"];
		UserRepos: Endpoints["GET /users/{username}/repos"]["response"];
	};
}
