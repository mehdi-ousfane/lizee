const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'postcss-loader',
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: () =>
        '<!DOCTYPE html><html><head><base href="/"><meta charset="utf-8"><title>' +
        'Lizee' +
        '</title></head><body><div id="root"></div></body></html>',
      filename: 'index.html',
    }),
    new WebpackShellPluginNext({
      onBuildStart: {
        scripts: [
          'echo "=====> Webpack Start" && npm run css:typings -- --watch',
        ],
        blocking: false,
        parallel: false,
      },
      onBuildEnd: {
        scripts: ['echo "=====> Webpack End"'],
        blocking: false,
        parallel: true,
      },
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    port: 8080,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
