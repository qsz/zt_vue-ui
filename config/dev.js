let path = require('fast-path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

function generateConfig(baseConfig) {
    return {
        entry: Object.assign({}, {
            'hotDevServer': 'webpack/hot/dev-server',
            'port': 'webpack-dev-server/client?http://localhost:' + baseConfig.port,
        }, baseConfig.entry),
        output: {
            path: path.resolve(__dirname,'../','__dev__'),
            //publicPath: '../Contents/mobile/',
            filename: 'js/[name].[hash].js',
            chunkFilename: 'js/[name].[hash].js'
        },
        resolve: {
            alias: baseConfig.alias,
            extensions: baseConfig.extensions
        },
        devServer: {
            contentBase: "../__dev__",//本地服务器所加载的页面所在的目录
            historyApiFallback: true,//不跳转
            inline: true,             //实时刷新
            hot:true,
            noInfo: true,
            port: baseConfig.port,
        },
        module: {
            rules: baseConfig.loaders.concat([
                {
                    test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                    loader: 'url-loader?limit=2048&name=static/[hash:8].[name].[ext]'
                }
            ])
        },
        plugins:[
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html',
                inject: true
            }),
            new ExtractTextPlugin({
                filename: 'css/[name].[hash].css',
                allChunks: true
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
}

module.exports = {
    generateConfig: generateConfig
}
