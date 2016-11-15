var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + '/build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            { 
                test: /\.jsx?$/, 
                loader: "babel-loader", 
                exclude: /node_modules/, 
                query: { presets: ['es2015', 'react']}
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};