const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const path = require('path');

const mode = process.env.ENV == "prod" ? "production" : "development";
const minify = process.env.ENV == "prod";

module.exports = {
    mode: mode,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Kanji-Game',
            inject: true, 
            minify: minify,
            hash: false,
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
};