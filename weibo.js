"use strict"

/* 基于NaSha远程命令接口, 发送微薄 */
require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
    "method": "POST",
    "data": {
        "type": "weibo",
        "action": "sendMessage",
        "message": "这是一条来自远程调用的微薄内容... 呵~"
    }
}).then((result)=> {
    console.log(result);
});
