let path = require('fast-path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

function generateConfig(baseConfig) {
    return {
        entry: baseConfig.entry,
        output: {
            path: path.resolve(__dirname,'../','lib'),
           // publicPath: 'Contents/mobile/',
            filename: 'js/[name].min.js',
            chunkFilename: 'js/[name].[hash].js'
        },
        resolve: {
            alias: baseConfig.alias,
            extensions: baseConfig.extensions
        },
        module: {
            rules: baseConfig.loaders.concat([
                {
                    test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                    loader: 'url-loader?limit=2048&name=static/[hash:8].[name].[ext]'
                }
            ])
        },
        // performance: {
        //     hints: false
        // },
        // devtool: '#eval-source-map',
        plugins:[
            new ExtractTextPlugin({
                filename: 'css/[name].[hash].css',
                allChunks: true
            }),
            new webpack.DefinePlugin({  //定义全局变量

            }),
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
    }
}


module.exports = {
    generateConfig: generateConfig
}