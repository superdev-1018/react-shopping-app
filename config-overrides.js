const webpack = require("webpack");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function override(config) {
	// config.output.path += '/../../deploy/web';
	const fallback = config.resolve.fallback || {"fs": false, 'process/browser': require.resolve('process/browser')};
	Object.assign(fallback, {
		crypto: require.resolve("crypto-browserify"),
		stream: require.resolve("stream-browserify"),
		// assert: require.resolve("assert"),
		path: require.resolve("path-browserify"),
		http: require.resolve("stream-http"),
		https: require.resolve("https-browserify"),
		os: require.resolve("os-browserify"),
		url: require.resolve("url"),
		assert: require.resolve("browserify-assets")
	});
	config.resolve.fallback = fallback;

	config.plugins = (config.plugins || []).concat([
		new TsconfigPathsPlugin(),
		new webpack.ProvidePlugin({
			// process: "process/browser",
			Buffer: ["buffer", "Buffer"],
		}),

	]);
	return config;
};