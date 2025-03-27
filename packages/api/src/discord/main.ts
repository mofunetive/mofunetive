import { Discord as Metadata } from "@mofunetive/metadata";
import { Axios, AxiosRequestConfig } from "axios";
import { Snowflake } from "discord-api-types/v10";

import { config as baseconfig } from "../axios/config/base.js";
import { interceptors } from "../axios/function/interceptors.js";
import type { GetTeamMembers, Member, Roles } from "./types.d.ts";

export class DiscordAPI extends Axios {
	private teamMembers: GetTeamMembers[] = [];

	constructor(token?: string, config?: AxiosRequestConfig) {
		super(
			Object.assign({}, config, baseconfig, {
				baseURL: "https://discord.com/api/v10/",
				headers: {
					...baseconfig.headers,
					Authorization: `Bot ${token ?? process.env.DISCORD_TOKEN}`,
				},
			}),
		);

		this.interceptors.request.use(
			function (config) {
				if (!(token ?? process.env.DISCORD_TOKEN)) return Promise.reject("error").catch((error) => error);
				return config;
			},
			function (error) {
				return Promise.reject(error);
			},
		);

		this.interceptors.response.use(interceptors as never);
	}

	public GetGuildMembers = (options?: { after?: Snowflake; limit: number }): Promise<Member[]> =>
		this.get(`guilds/${Metadata.server_id}/members`, {
			params: {
				limit: options?.limit ?? 100,
				after: options?.after,
			},
		});

	public GetTeamMembers = async (options?: { after?: Snowflake; limit: number }): Promise<GetTeamMembers[]> => {
		const roles = await this.GetGuildRoles({ bot: false, hoist: false, mentionable: false }),
			users = await this.GetGuildMembers(options);

		for (const iterator of roles.filter((role) => {
			if (role.tags?.bot_id) return;
			if (!role.mentionable) return;
			if (!role.hoist) return;
			return role;
		})) {
			const memberslist = users.filter((user) => {
				if (!user.roles.includes(iterator.id)) return;
				if (user.roles.includes("1077617181602357319")) return; // Ignore Canary Team
				if (user.roles[user.roles.indexOf(iterator.id)]) user.roles.splice(user.roles.indexOf(iterator.id), 1);
				if (user.roles.length > 0) {
					for (const id of user.roles) {
						user.roles[user.roles.indexOf(id)] = roles.find((role) => role.id === id).name;
					}
				}

				return user;
			});

			if (memberslist.length > 0) {
				this.teamMembers.push({
					name: iterator.name,
					members: memberslist,
				});
			}
		}

		return this.teamMembers;
	};

	public GetGuildRoles = (options?: { bot?: boolean; hoist?: boolean; mentionable?: boolean }): Promise<Roles[]> =>
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		this.get(`guilds/${Metadata.server_id}/roles`).then((roles: Roles[] | any) => {
			return roles
				.filter((role: Roles) => {
					if (!options?.bot && role.tags?.bot_id) return;
					if (options?.hoist && !role.hoist) return;
					if (options?.mentionable && !role.mentionable) return;
					return role;
				})
				.sort((a, b) => {
					if (a.position < b.position) {
						return 1;
					} else if (a.position > b.position) {
						return -1;
					}
					return 0;
				});
		});
}
