import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"scope-case": [2, "always", ["lower-case", "upper-case", "start-case"]],
		"type-case": [2, "always", "lower-case"],
		"subject-case": [2, "always", ["lower-case"]],
	},
};

export default Configuration;
