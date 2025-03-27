import * as esbuild from "esbuild";

const isWatchMode = process.argv.includes("--watch");
const buildOptions: esbuild.BuildOptions = {
	entryPoints: ["./src/library.js"],
	sourcemap: true,
	bundle: true,
	external: ["@mofunetive/metadata"],
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

if (isWatchMode) {
	for (const options of builds) {
		const context = await esbuild.context(options);
		await context.watch();

		console.log(`${options.format} Watching for changes...`);
	}
} else {
	await Promise.all(builds.map((options) => esbuild.build(options)));
}
