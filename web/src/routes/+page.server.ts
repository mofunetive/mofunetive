// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import type { PageServerLoad } from './$types';
import GitHubAPI from '@mofunetive/api';

export const load: PageServerLoad = async function () {
	const GitHub = new GitHubAPI();

	return {
		gitMembers: await GitHub.GetMembers(),
		gitProject: await GitHub.GetProject(),
		gitRepository: await GitHub.GetRepository()
	};
};
