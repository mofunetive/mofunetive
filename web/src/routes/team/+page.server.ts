import 'dotenv/config';

import { DiscordAPI } from '@mofunetive/api';

import type { PageLoad } from './$types';

export const load: PageLoad = async function () {
	const Discord = new DiscordAPI(process.env.DISCORD_TOKEN);
	const data = await Discord.GetTeamMembers();

	return {
		devTeam: data.filter((data) => data.roles.includes('877250319275397130')),
		staffTeam: data.filter((data) => data.roles.includes('907903785379184661'))
	};
};
