const webpack = require('webpack')
//打开浏览器
const WebpackBrowserPlugin = require('webpack-browser-plugin');
//单独打包css
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry:'./src/index.js',
	output:{
		filename:'bundle.js',
		publicPath:'dist/',
		path:__dirname+'/dist'
	},
	module:{
		loaders:[
			{
				test:/\.js/,
				exclude:/node_module/,
				loader:'babel-loader?presets[]=es2015&presets[]=react'
			},
			{
			    test: /\.css$/,
			    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test:/\.less$/i,
				// loader: 'style!css!less'
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
			}
		]
	},
	plugins: [
		    new ExtractTextPlugin("bundle.css"),
		    new htmlWebpackPlugin({
		    	template: './src/index.html',
		    	filename: './index.html'
		    }),
	       new WebpackBrowserPlugin()
	       // new webpack.optimize.UglifyJsPlugin()
       
  			]
};

module.exports = config;