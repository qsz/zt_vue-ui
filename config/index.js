let path = require('fast-path');
let srcPath = path.resolve(__dirname, '../', 'src');
let docsPath = path.resolve(__dirname, '../', 'docs');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let glob = require("glob");

let files = glob.sync(path.resolve(__dirname, '../', 'packages/*/index.js'));
let newEntry = {};

files.forEach(function(f){
    let name = /.*\/(packages\/.*?\/index)\.js/.exec(f)[1];//得到apps/question/index这样的文件名
    newEntry[name] = f;
});

let entry = {
    "zt_vue-ui": path.resolve(srcPath, 'index.js'),
    // vendor: ['vue', 'vue-router', '../src/vendor']
};

let moreEntry = Object.assign({}, entry, newEntry);

module.exports = {
    prodEntry: entry,
    docsEntry: {
        'docs': path.resolve(docsPath, 'index.js')
    },
    port: 8888
}