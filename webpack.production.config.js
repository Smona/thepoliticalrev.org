const path = require('path');
const webpack = require('webpack');

var dir = path.join(__dirname, '/assets/js/');

module.exports = {
	entry: path.join(dir, '/react/FilterableCandidateList.js'),
	output: {
		path: dir,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.sass$/, loader: 'style!css?autoprefixer?minifySelectors!sass'}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.AggressiveMergingPlugin()
	]
};
