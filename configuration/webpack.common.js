/**
 * Created by M041451 on 9/02/2017.
 */

const webpack = require('webpack');
const helper = require('./helper.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BaseHrefWebpackPlugin = require('base-href-webpack-plugin');


module.exports = {
    context: helper.root(),
    entry: './src/index.js',
    resolve: {
        extensions: [' ', '.js']
    },
    output: {
        path: helper.root('build'),
        publicPath: '/assets/',
        filename: '[name].js',
    },
    module:{
      rules: [
          {
              test:  /\.js$/,
              exclude: /node_modules/,
              use:[{loader: "babel-loader"}]
          },
          {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: 'style-loader'
                  },
                  {
                      loader: 'css-loader'
                  },
                  {
                      loader: 'sass-loader'
                  }
              ]
          },
          {
              test: /\.css$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: 'style-loader'
                  },
                  {
                      loader: 'css-loader'
                  }
              ]
          },
          {
              test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              use: 'url-loader'
          },
          {
              test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
              use: 'file-loader'
          },
          {
              test: /\.(png|jpe?g|gif|svg)$/i,
              use: 'file-loader?name=images/[name].[ext]'
          },
          {
              test: /\.html$/,
              include: helper.root('./src'),
              use: 'file-loader'
          }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'History',
            template: './src/index.template.ejs',
            inject: 'head',
            chunksSortMode: 'dependency'
        }),
        new HtmlWebpackPlugin({
            title: 'TDD Philosophy',
            filename: 'philosophy.html',
            template: './src/philosophy.template.ejs',
            inject: 'head',
        }),
        new HtmlWebpackPlugin({
            title: 'Process',
            filename: 'process.html',
            template: './src/process.template.ejs',
            inject: 'head',
        }),
        new HtmlWebpackPlugin({
            title: 'Tips & Tricks',
            filename: 'tips.html',
            template: './src/tips.template.ejs',
            inject: 'head',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};