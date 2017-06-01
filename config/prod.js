let path = require('fast-path'),
    webpack = require('webpack'),
    configPath = path.join(__dirname),
    buildPath = path.resolve(__dirname,'../','build'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    merge = require('webpack-merge');

let baseConfig = require(path.join(configPath, `index`)),
    baseWebpackConfig = require(path.join(buildPath, `webpack.base.js`));

let webpackConfig = merge(baseWebpackConfig,{
    entry: baseConfig.prodEntry,
    output: {
        path: path.resolve(__dirname,'../','lib'),
        //publicPath: '../Contents/mobile/',
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=2048&name=static/[hash:8].[name].[ext]'
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            filename: 'css/[name].[hash].css',
            allChunks: true
        }),
        new webpack.DefinePlugin({  //定义全局变量
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
});

module.exports = webpackConfig;
