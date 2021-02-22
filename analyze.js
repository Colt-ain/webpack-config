process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpackConfigProd = require('./webpack.config');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const green = text => chalk.green.bold(text);

webpackConfigProd.plugins.push(new BundleAnalyzerPlugin());
webpackConfigProd.plugins.push(new ProgressBarPlugin({
	format: `${green('analyzing...')} ${green('[:bar]')}${green('[:percent]')}${green('[:elapsed seconds]')} - :msg`,
}));
webpack(webpackConfigProd, (err, stats) => {
	if (err || stats.hasErrors())
		// eslint-disable-next-line no-console
		console.error(err);
});
