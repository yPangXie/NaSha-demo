"use strict"

/* 基于NaSha远程命令接口, 获取wanqu日报数据 */
require('urllib').request('http://bigyoo.me/ns/cmd', {
    "method": "POST",
    "data": {
        "type": "wanqu",
        "action": "getLatest"
    }
}).then((result)=> {
    console.log(JSON.parse(new Buffer(result.data).toString()));
}).catch((err) => {
    console.log(err);
});

/* 基于NaSha远程命令接口, 获取wanqu日报数据 */
require('urllib').request('http://bigyoo.me/ns/cmd', {
    "method": "POST",
    "data": {
        "type": "wanqu",
        "action": "getSpec",
        "issue": "100"
    }
}).then((result)=> {
    console.log(JSON.parse(new Buffer(result.data).toString()));
}).catch((err) => {
    console.log(err);
});
