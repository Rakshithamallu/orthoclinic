const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

// Export a function so webpack passes `argv.mode` (production | development)
module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const publicPath = isProd ? '/orthoclinic/' : '/';
  const publicUrl = isProd ? '/orthoclinic' : '';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'static/js/[name].[contenthash:8].js',
      publicPath: publicPath,
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'static/media/[name].[hash:8][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.svg',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public/assets',
            to: 'assets',
            noErrorOnMissing: true,
          },
          {
            from: 'public/404.html',
            to: '404.html',
            noErrorOnMissing: true,
          },
        ],
      }),
      new webpack.DefinePlugin({
        'process.env.PUBLIC_URL': JSON.stringify(publicUrl),
      }),
    ],
    devServer: {
      port: 3000,
      historyApiFallback: {
        index: '/index.html',
        rewrites: [
          { from: /^\/.*$/, to: '/index.html' },
        ],
      },
      hot: true,
      open: false,
      static: {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
      },
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          secure: false,
          changeOrigin: true,
        },
      },
    },
  };
};
