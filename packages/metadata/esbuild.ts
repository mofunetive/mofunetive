import * as esbuild from "esbuild";

const buildOptions: esbuild.BuildOptions = {
	entryPoints: ["./enum.ts"],
	platform: "node",
	sourcemap: true,
	bundle: true,
};

const builds: esbuild.BuildOptions[] = [
	{
		...buildOptions,
		outfile: "./dist/enum.js",
		format: "cjs",
	},
	{
		...buildOptions,
		outfile: "./esm/enum.js",
		format: "esm",
	},
];

await Promise.all(builds.map((options) => esbuild.build(options)));
