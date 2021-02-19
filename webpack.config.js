const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
	mode = 'production';
	target = 'browserslist';
}

module.exports = {
	mode: mode,
	target,
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
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
			}
		],
	},
	plugins: [new MiniCssExtractPlugin()],
	devServer: {
		contentBase: './dist',
		hot: true,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	}
};
