let path = require('fast-path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


function generateConfig(baseConfig) {
    return {
        entry: baseConfig.entry,
        output: {
            path: path.resolve(__dirname,'../','lib'),
           // publicPath: 'Contents/mobile/',
            filename: 'js/[name].[hash].js',
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
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html',
                inject: true
            }),
            new ExtractTextPlugin('css/[name].css'),
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