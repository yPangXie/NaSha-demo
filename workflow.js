"use strict"

const program = require('commander');

program.option('-u, --upload [url]', 'Grab and upload specified workflow from Packal to Lean Cloud')
       .option('-s, --spider [url]', 'Grab specidied workflow from Packal with the spider')
       .parse(process.argv);

/* 基于NaSha远程命令接口, 抓取指定页面的workflow数据 */
if(program.spider) {
    require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
        "method": "POST",
        "timeout": 100000,
        "data": {
            "type": "workflow",
            "action": "spider",
            "url": program.spider
        }
    }).then((result)=> {
        let resultData = JSON.parse(new Buffer(result.data).toString());
        console.log(resultData);
    }).catch((err) => {
        console.log(err);
    });
}

/* 基于NaSha远程命令接口, 获取指定url的workflow并上传到`Lean Cloud` */
if(program.upload) {
    require('urllib').request('http://bigyoo.me:8000/ns/cmd', {
        "method": "POST",
        "timeout": 100000,
        "data": {
            "type": "workflow",
            "action": "upload",
            "url": program.upload
        }
    }).then((result)=> {
        let resultData = JSON.parse(new Buffer(result.data).toString());
        console.log(resultData);
    }).catch((err) => {
        console.log(err);
    });
}
