import { AxiosError, AxiosResponse } from "axios";

export async function interceptors(onFulfilled: AxiosResponse, onRejected: AxiosError) {
	if (onFulfilled) {
		return JSON.parse(onFulfilled?.data);
	}

	if (onRejected) {
		switch (onRejected.status) {
			case 400: {
				console.error(onRejected.response.data);
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
		throw onRejected;
	}
}
