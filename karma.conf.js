var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha'],
        files: [
            'tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {test: /\.jsx$/, loader: 'babel-loader'},
                    {test: /\.js$/, loader: 'babel-loader'}
                ]
            },
            externals: {
                'react/addons': true,
                'react/lib/ReactContext': true,
                'react/lib/ExecutionEnvironment': true,
            },
            resolve: {
                extensions: ['.js', '.jsx']
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};