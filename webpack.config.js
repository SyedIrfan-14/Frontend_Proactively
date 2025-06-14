const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Added

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './', // or './'
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]' // Handles images imported in JS
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // Added: Copies static images from public/images to dist/images
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: 'public/images',
          to: 'images',
          noErrorOnMissing: true // Prevents errors if folder is empty
        }
      ]
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true, // SPA support
  },
  mode: 'development'
};
