var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('../webpack.config'),
    opn = require('opn'),
    args = require('minimist')(process.argv.slice(2));

console.log(args.env,"env");

new WebpackDevServer(webpack(config), config.devServer)
    .listen(config.devServer.port, '0.0.0.0', (err) => {
        if (err) {
            console.log(err);
            return
        }
        var uri = 'http://localhost:' + config.devServer.port;
        console.log('Listening at localhost:' + config.devServer.port);
        opn(uri)
    });
