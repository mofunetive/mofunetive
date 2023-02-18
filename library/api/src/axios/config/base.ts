import { AxiosRequestConfig } from "axios";

export const config: AxiosRequestConfig = {
	method: "GET",
	responseEncoding: "utf8",
	headers: {
		"content-type": "application/json",
	},
	responseType: "json",
};
