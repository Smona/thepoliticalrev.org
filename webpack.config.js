/* jshint esversion: 6 */

const path = require('path');
const webpack = require('webpack');

var dir = path.join(__dirname, '/assets/js');

module.exports = {
	entry: {
		CandidateList: path.join(dir, '/CandidateList/CandidateList.js'),
		ActivismTool: path.join(dir, '/ActivismTool/ActivismTool.jsx'),
	},
	output: {
		path: dir,
		filename: '[name].js'
	},
	module: {
		loaders: [
			{test: /\.js/, exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.sass$/, loader: 'style!css?autoprefixer?minifySelectors!sass'}
		]
	},
	watch: true
};
