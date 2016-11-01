var dir = __dirname + '/assets/js'
var webpack = require("webpack");

module.exports = {
    entry: dir + "/react/FilterableCandidateList.js",
    output: {
        path: dir,
        filename: "bundle.js"
    },
    module: {
			loaders: [
    		{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.sass$/, loader: "style!css?autoprefixer?minifySelectors!sass"}
  		]
    },
    watch: true,
    plugins: [new webpack.optimize.UglifyJsPlugin()]
};
