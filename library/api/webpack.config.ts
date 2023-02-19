/* eslint-disable unicorn/prefer-module */
import path from "node:path";
import { fileURLToPath } from "node:url";

import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";

const __filename = fileURLToPath(import.meta.url),
	__dirname = path.dirname(__filename);

const config: Configuration = {
	mode: "production",
	entry: path.resolve(__dirname, "./library.ts"),
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},

	plugins: [new CleanWebpackPlugin()],
	devtool: "source-map",
	optimization: {
		minimize: true,
		minimizer: [new CleanWebpackPlugin(), new TerserPlugin()],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	output: {
		libraryTarget: "umd",
		umdNamedDefine: true,
		filename: "library.js",
		path: path.resolve(__dirname, "lib"),
	},
};

export default config;
