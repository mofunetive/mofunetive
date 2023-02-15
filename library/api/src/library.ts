export type { GetAll, GetProject, GetMembers, GetRepository, GetImages, Octokit } from "./github/types";
export { GitHubAPI } from "./github/main.js";
export { RESTfulAPI as default } from "./github/restful.js";
export { WakaTimeAPI } from "./wakatime/main.js";
