"use strict"

const program = require('commander');

program.option('-p, --newPost', 'Store new post.')
       .parse(process.argv);

/* 基于NaSha远程命令接口, 调用消息响应接口 */
if(program.newPost) {
    require('urllib').request('http://bigyoo.me:8000/ns/weixin', {
        "method": "POST",
        "timeout": 100000,
        "data": `<xml>
             <ToUserName><![CDATA[toUser]]></ToUserName>
             <FromUserName><![CDATA[fromUser]]></FromUserName>
             <CreateTime>1348831860</CreateTime>
             <MsgType><![CDATA[text]]></MsgType>
             <Content><![CDATA[this is a test]]></Content>
             <MsgId>1234567890123456</MsgId>
        </xml>`
    }).then((result)=> {
        let resultData = JSON.parse(new Buffer(result.data).toString());
        console.log('newPost:', resultData);
    }).catch((err) => {
        console.log(err);
    });
}
