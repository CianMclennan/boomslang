const path = require('path');
const webpack = require('webpack');
const settings = require('./settings');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    console.log(settings);
    return {
        mode: settings.buildMode,
        entry: {
            boomslang: path.resolve(
                __dirname,
                'src',
                settings.editor ? 'editor/index.js' : 'index.js'
            ),
        },
        module: {
            rules: [
                {
                    test: /\.s*css$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.jsx*$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
            }),
        ],
        performance: {
            hints: false,
        },
        devtool: settings.buildMode === 'development' && 'source-map',
    };
};
