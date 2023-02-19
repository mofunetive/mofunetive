import { Discord as Metadata } from "@mofunetive/metadata";
import { Axios, AxiosRequestConfig } from "axios";
import { Snowflake } from "discord-api-types/v10";

import { config as baseconfig } from "../axios/config/base.js";
import { interceptors } from "../axios/function/interceptors.js";
import { Member } from "./types";

export class DiscordAPI extends Axios {
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

	public GetTeamMembers = (options?: { after?: Snowflake; limit: number }): Promise<Member[]> => {
		return this.GetGuildMembers(options).then((data) => {
			return data.filter((predicate) => {
				if (!predicate.roles.includes("877250319275397130")) return;
				return predicate;
			});
		});
	};
}
