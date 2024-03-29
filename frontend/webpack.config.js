	const path = require('path');
	const settings = require('./build-settings');
	const HtmlWebpackPlugin = require('html-webpack-plugin');

	module.exports = () => {
		return {
			entry: {
				boomslang: path.resolve(
					__dirname,
					'src',
					settings.editor ? 'editor/editor.js' : 'index.js'
				),
			},
			module: {
				rules: [
					{
						test: /\.s*css$/,
						use: ['style-loader', 'css-loader', 'sass-loader'],
					},
					{
						test: /\.jsx*$/,
						exclude: /node_modules/,
						use: ['babel-loader', 'eslint-loader'],
					},
					{
						test: /\.svg$/,
						use: 'file-loader',
					},
				],
			},
			plugins: [
				new HtmlWebpackPlugin({
					template: path.resolve(__dirname, 'src', 'index.html'),
				}),
			],
			resolve: {
				alias: {
					src: path.resolve(__dirname, 'src'),
				},
				extensions: ['.jsx', '.js'],
			},
			mode: 'development',
			performance: {
				hints: false,
			},
			devtool: 'source-map',
		};
	};
