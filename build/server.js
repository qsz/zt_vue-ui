var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.dev.conf')
    opn = require('opn'),
    args = require('minimist')(process.argv.slice(2));

console.log(args.env,"env");

new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer)
    .listen(webpackConfig.devServer.port, '0.0.0.0', (err) => {
        if (err) {
            console.log(err);
            return
        }
        var uri = 'http://localhost:' + webpackConfig.devServer.port;
        console.log('Listening at localhost:' + webpackConfig.devServer.port);
        opn(uri)
    });

