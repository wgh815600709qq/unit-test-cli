#! /usr/bin/env node
const path = require('path');
const rootPath = path.resolve(__dirname, '../');
const fs = require('fs');
const pragram = require('commander');

function getPackageInfo(pathway) {
    const content = fs.readFileSync(pathway).toString();
    let result;
    try {
        result = JSON.parse(content);
    } catch(e) {
        if (e) return {}
    }
    return result;
}

function getPackageVersion() {
    const info = getPackageInfo(path.resolve(rootPath, 'package.json'));
    console.log('verion',info.version)
    return info.version
}


pragram
    .version(getPackageVersion(), '-v,--version')
    .command('start')
    .description('不传参数表示测试src下全部文件, 参数表示src目录下对应文件的脚本。')
    .action(function(script) {
        console.log('script', script)
        if (script === undefined) { // 全部
            process.cwd(`node index.js`)
        } else { // 单个文件
            process.cwd(`node index.js ${script}`)
        }
    })