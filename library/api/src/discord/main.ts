import { Discord as Metadata } from "@mofunetive/metadata";
import { Axios, AxiosRequestConfig } from "axios";
import { Snowflake } from "discord-api-types/v10";

import { config as baseconfig } from "../axios/config/base.js";
import { interceptors } from "../axios/function/interceptors.js";
import { GetTeamMembers, Member, Roles } from "./types";

export class DiscordAPI extends Axios {
	private teamMembers: GetTeamMembers[] = [];

	constructor(token: string, config?: AxiosRequestConfig) {
		super(
			Object.assign({}, config, baseconfig, {
				baseURL: "https://discord.com/api/v10/",
				headers: {
					...baseconfig.headers,
					Authorization: `Bot ${token}`,
				},
			}),
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
		const role = await this.GetGuildRole({ bot: false, hoist: true, mentionable: true }),
			user = await this.GetGuildMembers(options);

		for (const iterator of role) {
			this.teamMembers.push({
				name: iterator.name,
				members: user.filter((predicate) => predicate.roles.includes(iterator.id)),
			});
		}

		return this.teamMembers;
	};

	public GetGuildRole = (options?: { bot?: boolean; hoist?: boolean; mentionable?: boolean }): Promise<Roles[]> =>
		this.get(`guilds/${Metadata.server_id}/roles`).then((data: Roles[] | any) => {
			return data
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
