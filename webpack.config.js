const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

/**
 * @typedef {import('webpack').WebpackOptionsNormalized} WebpackOptionsNormalized
 */

/**
 * @type {WebpackOptionsNormalized}
 */
const configuration = {
  entry: path.resolve(__dirname, './index.jsx'),
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html',
    }),
    new Dotenv(),
  ],
  mode: 'production',
  cache: false,
  devServer: {
    compress: true,
    port: 9000,
    host: '127.0.0.1',
    static: path.resolve(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Postcss to CSS
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', 'scss'],
  },
}

module.exports = configuration
