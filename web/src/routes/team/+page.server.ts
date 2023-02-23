import { DiscordAPI } from '@mofunetive/api';

import { DISCORD_TOKEN } from '$env/static/private';

import type { PageLoad } from './$types';

export const load: PageLoad = async function () {
	const Discord = new DiscordAPI(DISCORD_TOKEN);
	const data = await Discord.GetTeamMembers();

	return {
		dataTeam: data
	};
};
