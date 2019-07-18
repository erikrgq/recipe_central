const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "style-loader", //3. injects styles into DOM
                    "css-loader", //2. turns css into JS
                    "sass-loader"//1. turns sass into css
                ]
            }
        ]
    }
};