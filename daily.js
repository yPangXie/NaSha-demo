"use strict"

const program = require('commander');

program.option('-r, --dailyReport', 'Send daily report.')
       .parse(process.argv);

/* 基于NaSha远程命令接口, 新增一篇文章 */
if(program.dailyReport) {
    require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
        "method": "POST",
        "timeout": 100000,
        "data": {
            "type": "report",
            "action": "daily"
        }
    }).then((result)=> {
        let resultData = JSON.parse(new Buffer(result.data).toString());
        console.log('dailyReport:', dailyReport);
    }).catch((err) => {
        console.log(err);
    });
}
