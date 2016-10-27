var dir = __dirname + '/assets/js'

module.exports = {
    entry: dir + "/react/FilterableCandidateList.js",
    output: {
        path: dir,
        filename: "bundle.js"
    },
    module: {
			loaders: [
    		{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  		]
    }
};
