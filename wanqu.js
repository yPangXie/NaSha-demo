"use strict"

/* 基于NaSha远程命令接口, 获取最新一期的wanqu日报数据 */
require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
    "method": "POST",
    "timeout": 100000,
    "data": {
        "type": "wanqu",
        "action": "getLatest"
    }
}).then((result)=> {
    let resultData = JSON.parse(new Buffer(result.data).toString());
    console.log(resultData);
}).catch((err) => {
    console.log(err);
});

/* 基于NaSha远程命令接口, 获取指定期的wanqu日报数据 */
require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
    "method": "POST",
    "timeout": 100000,
    "data": {
        "type": "wanqu",
        "action": "getSpec",
        "issue": "1"
    }
}).then((result)=> {
    let resultData = JSON.parse(new Buffer(result.data).toString());
    console.log(resultData);
}).catch((err) => {
    console.log(err);
});

/* 基于NaSha远程命令接口, 爬取指定地址的数据 */
require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
    "method": "POST",
    "timeout": 100000,
    "data": {
        "type": "wanqu",
        "action": "spider",
        "issue": "603"
    }
}).then((result)=> {
    let resultData = JSON.parse(new Buffer(result.data).toString());
    console.log(resultData);
}).catch((err) => {
    console.log(err);
});
