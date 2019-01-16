const path = require('path');
var webpack = require('webpack');
var unminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: ['./Scripts/bundledApp/main.ts'],
    output: {
        path: path.resolve(__dirname, './Scripts/build'),
        filename: 'bundle.min.js'
    },
    // IMPORTANT NOTE: If you are using Webpack 2 or above, replace "loaders" with "rules"
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    },
    devtool: 'source-map',
    plugins: [
        new unminifiedWebpackPlugin({ sourcemap: true })
    ]
}