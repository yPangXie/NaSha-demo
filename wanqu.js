"use strict"

/* 基于NaSha远程命令接口, 获取wanqu日报数据 */
require('urllib').request('http://bigyoo.me:7000/ns/cmd', {
    "method": "POST",
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

/* 基于NaSha远程命令接口, 获取wanqu日报数据 */
require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
    "method": "POST",
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
