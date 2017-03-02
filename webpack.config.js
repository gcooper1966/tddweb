/**
 * Created by M041451 on 8/02/2017.
 */

var path = require('path');
var merge = require('webpack-merge');
var common = require('./configuration/webpack.common');
var dev = require('./configuration/webpack.dev');
var prod = require('./configuration/webpack.prod');

const TARGET = process.env.npm_lifecycle_event;

if(TARGET === 'start'){
    console.log("running development configuration");
    module.exports = merge(common, dev);
}

if(TARGET === 'build'){
    console.log("running production configuration");
    module.exports = merge(common, prod);
}

if(TARGET == 'test'){
    console.log("running test configuration");
    module.exports = {};
}

