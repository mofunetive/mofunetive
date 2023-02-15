import { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { GetAll, GetProject, Octokit as OctokitType } from "./types";

export class RESTfulAPI extends Axios {
	constructor(config?: AxiosRequestConfig) {
		super(
			config ?? {
				baseURL: "https://mofunetive-static-restful-api.vercel.app",
				method: "GET",
				responseEncoding: "utf8",
				headers: {
					"content-type": "application/json",
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

	public GetAll = (): Promise<GetAll["response"]> => this.get("GetAll");
	public GetProject = (): Promise<GetProject["response"]> => this.get("GetProject");
	public GetMembers = (): Promise<OctokitType["response"]["User"]["data"][]> => this.get("GetMembers");
	public GetRepository = (): Promise<OctokitType["response"]["OrganizationsRepos"]["data"]> => this.get("GetRepo");
}
