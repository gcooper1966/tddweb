/**
 * Created by M041451 on 9/02/2017.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }]
            }
        ]
    },
    plugins: [
        extractSass
    ]
};