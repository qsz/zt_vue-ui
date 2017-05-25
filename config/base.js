let path = require('fast-path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    srcPath = path.resolve(__dirname, '../', 'src'),
    distPath = path.resolve(srcPath, '../', 'dist');

let DEV_ENV = 'dev',
    DIST_ENV = 'dist';


module.exports = {
    entry: path.resolve(srcPath, 'app'),
    extensions: ['.js', '.vue', '.json'],
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
    },
    port: 9090,
    loaders:[
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                }
                // other vue-loader options go here
            }
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        // {
        //     test: /\.css$/,
        //     loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })//添加对样式表的处理
        // },
        // {
        //     test: /\.less$/,
        //     loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less-loader?strictMath&noIeCompat'})
        // },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader",
        },
        {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader",
        },
        {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            loader: "file-loader?name=static/[hash:8].[name].[ext]"
        }
    ],
    compile:{

    },
    srcPath: srcPath,
    distPath: distPath
}