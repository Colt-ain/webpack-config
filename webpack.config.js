const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const EsLingWebpackPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const path = require('path');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
	mode = 'production';
	target = 'browserslist';
}

const plugins = env => {
	console.log('webpack env', process.env.NODE_ENV);
	const basePlugins = [
		new HTMLWebpackPlugin({
			title: 'Webpack Config',
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin(),
		new DotEnv({
			path: path.resolve(
				__dirname, process.env.NODE_ENV !== 'production' ? `.env.${process.env.NODE_ENV}` : '.env'
			),
		}),
	];

	if (process.env.NODE_ENV === 'development') {
		console.log('')
		return [
			...basePlugins,
			new ReactRefreshWebpackPlugin(),
			new EsLingWebpackPlugin(),
			new CleanTerminalPlugin(),
		];
	}

	return basePlugins;
};

module.exports = env => {
	return {
		mode: env.NODE_ENV || 'development',
		target,
		devtool: 'source-map',
		entry: './src/index.js',
		output: {
			filename: 'bundle.[contenthash].js',
			chunkFilename: '[contenthash].js',
			path: path.resolve(__dirname, 'build'),
			assetModuleFilename: 'images/[hash][ext][query]',
		},
		module: {
			rules: [
				{
					test: /\.(png|jpe?g|gif|svg)$/i,
					type: 'asset/resource',
				},
				{
					test: /\.(s[ac]|c)ss$/i,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: { publicPath: '' }
						},
						'css-loader',
						'postcss-loader',
						'sass-loader',
					]
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.ttf/,
					type: 'asset/resource',
					generator: {
						filename: 'fonts/[name]-[hash][ext]',
					},
				},
			],
		},
		plugins: plugins(env.NODE_ENV),
		devServer: {
			contentBase: './dist',
			hot: true,
			port: 3000,
			open: true,
			overlay: true,
			compress: true,
		},
		resolve: {
			extensions: ['.js', '.jsx'],
		},
	};
}
