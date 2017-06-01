let path = require('fast-path');
let configPath = path.resolve(__dirname,'../','config');
module.exports = require(path.join(configPath, 'docs_build'));