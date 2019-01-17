"use strict";
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    plugins: [
        new CleanWebpackPlugin(['./dist/js/']),
    ],
    output: {
        filename: "./dist/bundle.js",
        chunkFilename: './dist/js/[name].[chunkhash].js',
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                  {
                      loader: 'css-loader'
                  },
                  {
                      loader: 'sass-loader'
                  }
                ]
            },
            {
                resourceQuery: /blockType=i18n/,
                type: 'javascript/auto',
                loader: '@kazupon/vue-i18n-loader'
              }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js',
        }
    }
};