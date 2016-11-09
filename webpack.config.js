const path = require('path');
const webpack = require('webpack');

var dir = path.join(__dirname, '/assets/js');

module.exports = {
	entry: dir + '/react/FilterableCandidateList.js',
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
	watch: true
};
