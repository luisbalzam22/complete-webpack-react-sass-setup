const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common-config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(commonConfig, {
	mode: 'production',
	output: {
		filename: '[name]-bundled-[contentHash].js', //the [content] is used for Cash Busting
		path: path.resolve(__dirname, 'production-root-folder'),
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({ filename: 'main-[contentHash].css' }),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], //MUST ALWAYS REMEMBER THAT LOADERS IN A RULE ARE ALWAYS EXECUTED RIGHT-TO-LEFT (ORDER MATTERS!)
			},
		],
	},
});
