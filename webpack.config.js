let app_root = 'src'; // the app root folder: src, src_users, etc
let path = require('path');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    app_root: app_root,
    entry: [
        // './main.js',
        // http://gaearon.github.io/react-hot-loader/getstarted/
        'webpack-dev-server/client?http://localhost:3344',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        // __dirname + '/' + app_root + '/index.js',
        './' + app_root + '/index.js',
    ],
    output: {
        path: __dirname + '/public/js',
        publicPath: 'js/',
        filename: 'bundle.js',
    }
    ,
    devServer: {
        inline: true,
        port: 3344,
        contentBase: __dirname + '/public',
        historyApiFallback: {
            index: 'index.html'
        }
    }
    ,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                // https://github.com/jtangelder/sass-loader
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            }
        ]
    }
}
;
