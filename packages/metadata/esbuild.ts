import * as esbuild from "esbuild";
const isWatchMode = process.argv.includes("--watch");
const buildOptions: esbuild.BuildOptions = {
	entryPoints: ["./enum.ts"],
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

if (isWatchMode) {
	for (const options of builds) {
		const context = await esbuild.context(options);
		await context.watch();

		console.log(`${options.format} Watching for changes...`);
	}
} else {
	await Promise.all(builds.map((options) => esbuild.build(options)));
}
