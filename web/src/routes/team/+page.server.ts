// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { DiscordAPI } from '@mofunetive/api';

import type { PageLoad } from './$types';

export const load: PageLoad = async function () {
	const Discord = new DiscordAPI('');
	const data = await Discord.GetTeamMembers('');

	return {
		devTeam: data.filter((data) => data.roles.includes('877250319275397130')),
		staffTeam: data.filter((data) => data.roles.includes('907903785379184661'))
	};
};
