const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    devServer: {
        static: './dist',
        hot: true,
        port: 8000,
        open: true
    },
    stats: 'minimal',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js'
    },
    plugins: [new MiniCssExtractPlugin(),
              new HtmlWebpackPlugin({template:'./src/index.html',  title: 'Development',}),
    ],
    module: {
        rules: [
          { test: /\.css$/,
           use: [ {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader'] }
        ]
    }
};