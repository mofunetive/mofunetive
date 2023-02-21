import 'dotenv/config';

import { DiscordAPI } from '@mofunetive/api';

import type { PageLoad } from './$types';

export const load: PageLoad = async function () {
	const Discord = new DiscordAPI('MTA3MTI0NzI5MTI5NTQ2OTYwOA.GUm_mS.6XlQcWo4Uk5g0bH4xxdyTdWzlLesdUesH3Ptkk');
	const data = await Discord.GetTeamMembers();

	return {
		dataTeam: data
	};
};
