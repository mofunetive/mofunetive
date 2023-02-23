import { Axios, AxiosRequestConfig } from "axios";

import { config as baseconfig } from "./axios/config/base.js";
import { interceptors } from "./axios/function/interceptors.js";
import type { GetAll, GetProject, Octokit as OctokitType } from "./github/types.js";

export class RESTfulAPI extends Axios {
	constructor(config?: AxiosRequestConfig) {
		super(
			Object.assign({}, config, baseconfig, {
				baseURL: "https://mofunetive-static-restful-api.vercel.app",
			}),
		);

		this.interceptors.response.use(interceptors as never);
	}

	public GetAll = (): Promise<GetAll["response"]> => this.get("GetAll");
	public GetProject = (): Promise<GetProject["response"]> => this.get("GetProject");
	public GetMembers = (): Promise<OctokitType["response"]["User"]["data"][]> => this.get("GetMembers");
	public GetRepository = (): Promise<OctokitType["response"]["OrganizationsRepos"]["data"]> => this.get("GetRepo");
}
