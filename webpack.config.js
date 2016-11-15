const path = require('path');
const webpack = require('webpack');

var dir = path.join(__dirname, '/app');

module.exports = {
	entry: path.join(__dirname, '/app/app.js'),
	output: {
		path: __dirname,
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
