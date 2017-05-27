let path = require('fast-path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    srcPath = path.resolve(__dirname, '../', 'src'),
    distPath = path.resolve(srcPath, '../', 'dist');

let glob = require("glob");
let files = glob.sync(path.resolve(__dirname, '../', 'packages/*/index.js'));
let newEntries = {};

files.forEach(function(f){
    let name = /.*\/(packages\/.*?\/index)\.js/.exec(f)[1];//得到apps/question/index这样的文件名
    newEntries[name] = f;
});

let entry = {
    "zt_vue-ui": path.resolve(srcPath, 'index.js'),
    // vendor: ['vue', 'vue-router', '../src/vendor']
};
let configEntry = Object.assign({}, entry, newEntries);

let DEV_ENV = 'dev',
    DIST_ENV = 'dist';


module.exports = {
    entry: entry,
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
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader',
                        fallback: 'vue-style-loader'
                    })
                }
            }
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'vue-style-loader'
            })
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'less-loader'],
                fallback: 'vue-style-loader'
            })
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
};