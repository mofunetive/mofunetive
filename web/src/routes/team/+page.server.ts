import 'dotenv/config';

import { DiscordAPI } from '@mofunetive/api';

import type { PageLoad } from './$types';

export const load: PageLoad = async function () {
	const Discord = new DiscordAPI();

	return {
		dataTeam: await Discord.GetTeamMembers()
	};
};
