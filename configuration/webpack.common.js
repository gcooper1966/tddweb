/**
 * Created by M041451 on 9/02/2017.
 */

var webpack = require('webpack');
var helper = require('./helper.js');


module.exports = {
    entry: {
        polyfills: './src/polyfills.js',
        vendor: './src/vendor.js',
        app: './src/index.js'
    },
    resolve: {
        extensions: [' ', '.js']
    },
    output: {
        path: helper.root('build'),
        publicPath: '/assets/',
        filename: '[name].js',
    }
}