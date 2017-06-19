let path = require('fast-path'),
    webpack = require('webpack'),
    configPath = path.join(__dirname),
    buildPath = path.resolve(__dirname,'../','build'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    merge = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

let baseConfig = require(path.join(configPath, `index`)),
    baseWebpackConfig = require(path.join(buildPath, `webpack.base.js`));

let webpackConfig = merge(baseWebpackConfig,{
    entry: Object.assign({}, {
        'hotDevServer': 'webpack/hot/dev-server',
        'port': 'webpack-dev-server/client?http://localhost:' + baseConfig.port,
    }, baseConfig.docsEntry),
    output: {
        path: path.resolve(__dirname,'../','example'),
        //publicPath: '../Contents/mobile/',
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[hash].js'
    },
    devServer: {
        contentBase: "../example",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,             //实时刷新
        hot:true,
        noInfo: true,
        port: baseConfig.port,
        proxy: {
            '/api': {
                target: 'http://localhost',
                pathRewrite: {'^/api' : '/Astronergy.UserMapping'},
                changeOrigin: true
            }
        }
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[hash].css',
            allChunks: true
        }),
        new webpack.DefinePlugin({  //定义全局变量

        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});
module.exports = webpackConfig;
