let path = require('fast-path'),
    docsPath = path.resolve(__dirname, '../', 'docs'),
    srcPath = path.resolve(__dirname, '../', 'src'),
    pagePath = path.resolve(__dirname, '../', 'packages'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'Assets': path.resolve(docsPath, './', 'assets'),
            'Components': path.resolve(docsPath, './', 'components'),
            'Css': path.resolve(docsPath, './', 'css'),
            'Libs': path.resolve(docsPath, './', 'libs'),
            'Pages': path.resolve(docsPath, './', 'pages'),
            'Plugins': path.resolve(docsPath, './', 'plugins'),
            'Router': path.resolve(docsPath, './', 'router'),
            'Docs': docsPath,
            'Packages': pagePath,
            'Src': srcPath
        },
    },
    module:{
        rules:[
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
                // loader: ExtractTextPlugin.extract({
                //         fallback: 'style-loader',
                //         use: ['css-loader', 'less-loader']
                //     })
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                loader: "file-loader?name=static/[name].[ext]"
            }
        ]
    }
};