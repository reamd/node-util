/**
 * Created by reamd on 2018/1/17.
 */
let fs = require('fs');
let cmd = require('node-cmd');
let srcPath = 'ss Checkin $/7.日常工作/工作日报/2018/技术研发部/网络程序组/网络程序组2018年1月工作日报.xls';

let checkout
let writeWR
let checkin
let deleteFile

/*判断是否有人在用*/

checkout = new Promise((resolve, reject)=>{
    cmd.get(`ss checkout ${srcPath}`, ()=>{
      resolve();
    })
})


checkout.then(()=>{
    writeWR = new Promise((resolve, reject)=>{
        cmd.get(`打开xls ${srcPath}`, ()=>{
            resolve();
        })
    })
})

writeWR.then(()=>{
    checkin = new Promise((resolve, reject)=>{
        cmd.get(`ss checkin ${srcPath}`, ()=>{
            resolve();
        })
    })
})

checkin.then(()=>{
//    delete xls文件

})