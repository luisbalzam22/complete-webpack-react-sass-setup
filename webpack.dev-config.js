const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common-config.js');

module.exports = merge(commonConfig, {
	mode: 'development',
	output: {
		filename: '[name]-bundled.js', //since this config is for development, we don't need to cache bust
		path: path.resolve(__dirname, 'production-root-folder'),
	},
	devServer: {
		port: 9000, //we may need to work with multiple projects/libraries/frameworks using multiple local servers, which is why it's quite necessary to be able to modify port number
	},
});
