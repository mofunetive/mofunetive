import * as esbuild from "esbuild";

const buildOptions: esbuild.BuildOptions = {
	entryPoints: ["./src/library.js"],
	platform: "node",
	sourcemap: true,
	bundle: true,
};

const builds: esbuild.BuildOptions[] = [
	{
		...buildOptions,
		outfile: "./dist/library.js",
		format: "cjs",
	},
	{
		...buildOptions,
		outfile: "./esm/library.js",
		format: "esm",
	},
];

await Promise.all(builds.map((options) => esbuild.build(options)));
