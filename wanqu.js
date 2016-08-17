"use strict"

const program = require('commander');

program.option('-l, --latest', 'Get latest issue of Wanqu')
       .option('-r, --random', 'Get 5 random issues of Wanqu')
       .option('-1, --random1', 'Get 1 random issues of Wanqu')
       .option('-2, --random2', 'Get 2 random issues of Wanqu')
       .option('-i, --issue [issue]', 'Get the specified issue of Wanqu')
       .option('-s, --spider [issues]', 'Grab specidied issue from Wanqu with the spider')
       .option('-d, --detectLatest', 'Detect latest issue of Wanqu')
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

/* 基于NaSha远程命令接口, 获取随机的5篇数据 */
if(program.random) {
    require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
        "method": "POST",
        "timeout": 100000,
        "data": {
            "type": "wanqu",
            "action": "getRandom"
        }
    }).then((result)=> {
        let resultData = JSON.parse(new Buffer(result.data).toString());
        console.log('detectLatest result:', resultData);
    }).catch((err) => {
        console.log(err);
    });
}

/* 基于NaSha远程命令接口, 获取随机的5篇数据 */
if(program.random1) {
    require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
        "method": "POST",
        "timeout": 100000,
        "data": {
            "type": "wanqu",
            "action": "getRandom",
            "count": 1
        }
    }).then((result)=> {
        let resultData = JSON.parse(new Buffer(result.data).toString());
        console.log('detectLatest result:', resultData);
    }).catch((err) => {
        console.log(err);
    });
}

/* 基于NaSha远程命令接口, 获取随机的2篇数据 */
if(program.random2) {
    require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
        "method": "POST",
        "timeout": 100000,
        "data": {
            "type": "wanqu",
            "action": "getRandom",
            "count": 2
        }
    }).then((result)=> {
        let resultData = JSON.parse(new Buffer(result.data).toString());
        console.log('detectLatest result:', resultData);
    }).catch((err) => {
        console.log(err);
    });
}
