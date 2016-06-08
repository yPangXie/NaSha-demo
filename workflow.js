"use strict"

/* 基于NaSha远程命令接口, 抓取指定页面的workflow数据 */
require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
    "method": "POST",
    "timeout": 100000,
    "data": {
        "type": "workflow",
        "action": "spider",
        "url": "http://www.packal.org/workflow/wifi-control"
    }
}).then((result)=> {
    let resultData = JSON.parse(new Buffer(result.data).toString());
    console.log(resultData);
}).catch((err) => {
    console.log(err);
});
