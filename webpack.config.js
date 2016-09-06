const WebpackBrowserPlugin = require('webpack-browser-plugin');
const config = {
	entry:'./index.js',
	output:{
		filename:'bundle.js',
		publicPath:'dist/',
		path:__dirname+'/dist'
	},
	module:{
		loaders:[
		{test:/\.js/,exclude:/node_module/,loader:'babel-loader?presets[]=es2015&presets[]=react'}
		]
	},
	plugins: [
       new WebpackBrowserPlugin()
  ]
};

module.exports = config;