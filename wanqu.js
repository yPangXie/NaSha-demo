"use strict"

const program = require('commander');

program.option('-l, --latest', 'Get latest issue of Wanqu')
       .option('-i, --issue [issue]', 'Get the specified issue of Wanqu')
       .option('-s, --spider [issues]', 'Grab specidied issue from Wanqu with the spider')
       .parse(process.argv);

/* 基于NaSha远程命令接口, 获取最新一期的wanqu日报数据 */
if(program.latest) {
    require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
        "method": "POST",
        "timeout": 100000,
        "data": {
            "type": "wanqu",
            "action": "getLatest"
        }
    }).then((result)=> {
        let resultData = JSON.parse(new Buffer(result.data).toString());
        console.log('latest:', resultData);
    }).catch((err) => {
        console.log(err);
    });
}

/* 基于NaSha远程命令接口, 获取指定期的wanqu日报数据 */
if(program.issue) {
    require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
        "method": "POST",
        "timeout": 100000,
        "data": {
            "type": "wanqu",
            "action": "getSpec",
            "issue": program.issue
        }
    }).then((result)=> {
        let resultData = JSON.parse(new Buffer(result.data).toString());
        console.log('spec:', resultData);
    }).catch((err) => {
        console.log(err);
    });
}

/* 基于NaSha远程命令接口, 爬取指定地址的数据 */
if(program.spider) {
    require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
        "method": "POST",
        "timeout": 100000,
        "data": {
            "type": "wanqu",
            "action": "spider",
            "issue": program.spider
        }
    }).then((result)=> {
        let resultData = JSON.parse(new Buffer(result.data).toString());
        console.log('spider:', resultData);
    }).catch((err) => {
        console.log(err);
    });
}
