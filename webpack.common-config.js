const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		mainjs: path.resolve(
			__dirname,
			'sourcecode-folder',
			'js',
			'mainjs-entrypoint.js'
		),
		vendorjs: path.resolve(
			__dirname,
			'sourcecode-folder',
			'js',
			'vendorjs-entrypoint.js'
		),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './sourcecode-folder/mainhtml-template.html',
			favicon: './sourcecode-folder/assets/favicon.ico',
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
					},
				},
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'], //MUST ALWAYS REMEMBER THAT LOADERS IN A RULE ARE ALWAYS EXECUTED RIGHT-TO-LEFT (ORDER MATTERS!)
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name]-[hash].[ext]', //name of spit file, using cache busting
						outputPath: 'images', //name of dynamically created folder where such file will be placed
					},
				},
			},
		],
	},
};
