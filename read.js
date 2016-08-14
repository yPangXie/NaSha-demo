"use strict"

const program = require('commander');

program.option('-n, --newPost', 'Store new post.')
       .option('-l, --list', 'Get posts.')
       .parse(process.argv);

/* 基于NaSha远程命令接口, 新增一篇文章 */
if(program.newPost) {
    require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
        "method": "POST",
        "timeout": 100000,
        "data": {
            "type": "read",
            "action": "newPost",
            "title": "test",
            "description": "test description",
            "url": "http://www.google.com",
            "favicon": "en. favicon",
            "keywords": "keywords, keywords",
            "tag": "前端, 测试, 你好, 哈哈, 嘿嘿.."
        }
    }).then((result)=> {
        let resultData = JSON.parse(new Buffer(result.data).toString());
        console.log('newPost:', resultData);
    }).catch((err) => {
        console.log(err);
    });
}

/* 基于NaSha远程命令接口, 获取指定页码的对应的数据 */
if(program.list) {
    require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
        "method": "POST",
        "timeout": 100000,
        "data": {
            "type": "read",
            "action": "list",
            "limit": 5
        }
    }).then((result)=> {
        let resultData = JSON.parse(new Buffer(result.data).toString());
        console.log('list:', resultData);
    }).catch((err) => {
        console.log(err);
    });
}
