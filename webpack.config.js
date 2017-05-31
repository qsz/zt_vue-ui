'use strict'
var path = require('fast-path'),
    configPath = path.join(__dirname, `config`),
    args = require('minimist')(process.argv.slice(2));

// set the correct environment and other settings
var env = args.env || 'dev';

console.log(`*****************  env is ${env}  **********************`);

// get base config
var baseConfig = require(path.join(configPath, 'base.dist'));

// get config
var configGenerator = require(path.join(configPath, env));
var config = configGenerator.generateConfig(baseConfig);

// exports
module.exports = config;


