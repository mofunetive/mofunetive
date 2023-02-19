// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import GitHubAPI from '@mofunetive/api';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	const GitHub = new GitHubAPI();

	return {
		gitMembers: await GitHub.GetMembers(),
		gitProject: await GitHub.GetProject(),
		gitRepository: await GitHub.GetRepository()
	};
};
