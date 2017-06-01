let webpack = require('webpack'),
    path = require('fast-path'),
    rm = require('rimraf'),
    config = require('./webpack.docs.conf');


rm(path.resolve(__dirname, '../', 'example'), err => {
    webpack(config,function (err, stats){
        if(err) throw err;
        console.log('success')
    });
});

