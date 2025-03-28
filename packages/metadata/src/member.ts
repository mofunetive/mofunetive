/* eslint-disable typescript-sort-keys/string-enum */
export interface MemberInfo {
	active: boolean;
	category: string;
	role: string;
	type: string;
}

enum MemberType {
	Fullstack = "Fullstack",
	Backend = "Backend",
	Frontend = "Frontend",
}

enum MemberCategory {
	Developer = "Developer",
	Designer = "Designer",
	Manager = "Manager",
}

enum MemberRole {
	Founder = "Founder",
	Member = "Member",
	Contributor = "Contributor",
}

export const Member: Record<string, MemberInfo | null> = {
	faelayis: {
		type: MemberType.Backend,
		category: MemberCategory.Developer,
		role: MemberRole.Founder,
		active: true,
	},
	whyzotee: {
		type: MemberType.Frontend,
		category: MemberCategory.Developer,
		role: MemberRole.Founder,
		active: true,
	},
};
