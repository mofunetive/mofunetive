import { DiscordAPI } from '@mofunetive/api';

import type { PageLoad } from './$types';

export const load: PageLoad = async function () {
	const Discord = new DiscordAPI();
	const data = await Discord.GetTeamMembers();

	return {
		dataTeam: data
	};
};
