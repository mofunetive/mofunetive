import { Axios, AxiosRequestConfig } from "axios";

import { config as baseconfig } from "./axios/config/base.js";
import { interceptors } from "./axios/function/interceptors.js";
import type { GetAll, GetMembers, GetProject, GetRepository } from "./github/types.d.ts";

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
	public GetMembers = (): Promise<GetMembers["response"]> => this.get("GetMembers");
	public GetRepository = (): Promise<GetRepository["response"]> => this.get("GetRepo");
}
