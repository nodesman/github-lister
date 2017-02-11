var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var SRC = path.resolve(__dirname, 'src/js');
var DEST = path.resolve(__dirname, 'docs/');

var copyOptions = [{
    from: 'node_modules/bootstrap-sass/assets/fonts',
    to: './fonts/'
},{
    from: 'src/images/',
    to: './images'
}, {
    from: 'src/index.html',
    to: './'
}];

var config = {
    entry: {
        app: SRC + '/GithubViewer.jsx',
        vendors: ['./node_modules/jquery/dist/jquery.js', './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js']
    },
    output: {
        path: DEST,
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.jsx?/,
            include: SRC,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new CopyWebpackPlugin(copyOptions, {
            copyUnmodified: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = config;
