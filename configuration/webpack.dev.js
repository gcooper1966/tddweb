/**
 * Created by M041451 on 9/02/2017.
 */

var merge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var helper = require('./helper');

module.exports = {
    devtool: 'cheap-eval-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: helper.root('src'),
        port: 8000,
        stats: 'minimal'
    }
};