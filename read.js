"use strict"

const program = require('commander');

program.option('-n, --newPost', 'Store new post.')
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
