const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
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
              import: true,
              modules: true,
              modules: { localIdentName: '[local]--[hash:base64:5]' },
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
              import: true,
              modules: true,
            },
          },
          'postcss-loader',
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [path.join(__dirname, '..', 'node_modules')],
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
      template: './src/index.html',
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
    alias: {
      'react-calendar': path.resolve(
        __dirname,
        './node_modules/react-calendar',
      ),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
};
