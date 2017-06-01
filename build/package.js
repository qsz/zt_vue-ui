let webpack = require('webpack'),
    path = require('fast-path'),
    rm = require('rimraf'),
    config = require('./webpack.prod.conf');


rm(path.resolve(__dirname, '../', 'lib'), err => {
    webpack(config,function (err, stats){
        if(err) throw err;
        console.log('success')
    });
});

