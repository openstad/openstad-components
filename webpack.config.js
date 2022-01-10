const webpack = require("webpack");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin"); 
module.exports = {

	devtool: 'source-map',
	// mode: 'production',
	mode: 'development',

	entry: {
    "all": './src/index.jsx',
    "base-map": './src/base-map/index.jsx',
    "button": './src/button/index.jsx',
    "choices-guide": './src/choices-guide/index.jsx',
    "forms": './src/forms/index.jsx',
    "idea-details": './src/idea-details/index.jsx',
    "ideas-overview": './src/ideas-overview/index.jsx',
    "idea-image": './src/image/index.jsx',
    "ideas-on-map": './src/ideas-on-map/index.jsx',
    "lightbox": './src/lightbox/index.jsx',
    "modal-popup": './src/modal-popup/index.jsx',
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
    minimize: true,
    minimizer: [new TerserPlugin()],
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

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, 
            options: {
              publicPath: '../'
            }
          },
          {
            loader: "css-loader"
          }
        ]
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
              publicPath: '../'
            },
          },
        ],
      },
      
		],
	},
	
}

