const webpack = require("webpack");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 
module.exports = {

	devtool: 'source-map',
	// mode: 'production',
	mode: 'development',

	entry: {
    "all": './src/index.jsx',
    "base-map": './src/base-map/index.jsx',
    "choices-guide": './src/choices-guide/index.jsx',
    "idea-details": './src/idea-details/index.jsx',
    "ideas-overview": './src/ideas-overview/index.jsx',
    "idea-image": './src/image/index.jsx',
    "ideas-on-map": './src/ideas-on-map/index.jsx',
    "lightbox": './src/lightbox/index.jsx',
    "modal-popup": './src/modal-popup/index.jsx',
    "numberplates": './src/numberplates/index.jsx',
    "poll": './src/poll/index.jsx',
    "previous-next-button-block": './src/previous-next-button-block/index.jsx',
    "reactions": './src/reactions/index.jsx',
  },

	output: {
		path: __dirname + '/dist',
		filename: '[name].js',
    library: ['OpenStadComponents', '[name]'],
    libraryTarget: 'window',
	},

	externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
	},

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      ignoreOrder: false,
    }),
    new webpack.ProvidePlugin({
      Promise: 'es6-promise-promise',
    }),
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.jsx?$/,
        exclude: /\/core-js/,
        minify(file, sourceMap) {
          const extractedComments = [];
          const { error, map, code, warnings } = require('uglify-js') // Or require('./path/to/uglify-module')
                .minify(
                  file,
                  { /* Your options for minification */ },
                );
          return { error, map, code, warnings, extractedComments };
        }
        
      })
    ]
  },
  
	module: {
		rules: [

			{
				test: /\.json$/,
				loader: "json-loader"
			},

			{
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/openstad-component)/,
        use: {
          loader: "babel-loader"
        }
			},

      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'less-loader',
        ],
      },

      // deze kwam ik ergens tegen maar heb ik nog niet geprobeerd
			// {
			//   test: /\.css/,
			//   use: [
			//   	{
			//   		loader: MiniCssExtractPlugin.loader,
			//   		options: {
			//   			hmr: process.env.NODE_ENV === 'development',
			//   		},
			//   	},
			//   	'css-loader',
			//   ],
			// },
      
		],
	},
	
}

