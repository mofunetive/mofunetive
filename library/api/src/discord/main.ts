import { Discord as Metadata } from "@mofunetive/metadata";
import { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Snowflake } from "discord-api-types/v10";

import { Member } from "./types";

export class DiscordAPI extends Axios {
	constructor(token: string, config?: AxiosRequestConfig) {
		super(
			config ?? {
				baseURL: "https://discord.com/api/v10/",
				method: "GET",
				responseEncoding: "utf8",
				headers: {
					"content-type": "application/json",
					Authorization: `Bot ${token}`,
				},
				responseType: "json",
			},
		);

		this.interceptors.response.use(
			(response: AxiosResponse) => {
				return JSON.parse(response?.data);
			},
			(error: AxiosError) => {
				switch (error.status) {
					case 400: {
						console.error(error.response.data);
						break;
					}
					case 401: {
						console.error("unauthorised");
						break;
					}
					case 404: {
						console.error("/not-found");
						break;
					}
					case 500: {
						console.error("/server-error");
						break;
					}
				}
				return Promise.reject(error);
			},
		);
	}

	public GetGuildMembers = (options?: { after?: Snowflake; limit: number }): Promise<Member[]> =>
		this.get(`guilds/${Metadata.server_id}/members`, {
			params: {
				limit: options?.limit ?? 100,
				after: options?.after,
			},
		});
}
