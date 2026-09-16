const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Export a function so webpack passes `argv.mode` (production | development)
module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const publicPath = isProd ? '/orthoclinic/' : '/';

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
    ],
    devServer: {
      port: 3000,
      historyApiFallback: {
        index: '/',
        disableDotRule: true,
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
