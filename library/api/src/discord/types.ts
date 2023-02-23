export type Member = {
	avatar: null;
	communication_disabled_until: Date | null;
	deaf: boolean;
	flags: number;
	is_pending: boolean;
	joined_at: Date;
	mute: boolean;
	nick: string;
	pending: boolean;
	premium_since: null;
	roles: string[];
	user: User;
};

export type User = {
	avatar: string;
	avatar_decoration: null;
	bot?: boolean;
	discriminator: string;
	display_name: null;
	id: string;
	public_flags: number;
	username: string;
};

export type Roles = {
	color: number;
	description: null;
	flags: number;
	hoist: boolean;
	icon: null;
	id: string;
	managed: boolean;
	mentionable: boolean;
	name: string;
	permissions: string;
	position: number;
	tags?: Tags;
	unicode_emoji: null;
};

export type Tags = {
	bot_id: string;
};

export interface GetTeamMembers {
	members: Member[];
	name: string;
}
