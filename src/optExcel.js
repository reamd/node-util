/**
 * Created by reamd on 2018/1/17.
 */
let xlsx = require('node-xlsx');
let fs = require('fs');

//读取文件内容
let obj = xlsx.parse(__dirname+'/网络程序组2018年1月工作日报.xls');//配置excel文件的路径
let excelObj=obj[1].data;//excelObj是excel文件里第一个sheet文档的数据，obj[i].data表示excel文件第i+1个sheet文档的全部内容

// console.log(excelObj);

function lastPos(arr,value){
    let pos = -1
    arr.forEach((item, idx)=>{
        if(item.indexOf(value) > -1) {
            pos = idx
        }
    })
    return pos
}
console.log(lastPos(excelObj, '孟大军'), excelObj[220])



const data = [
    [43117, '孟大军', '网络', '智慧教室', '程序设计', '智慧教室', '正常', 7.5, '智慧教室1.3Demo，开发离线本地电子书html'],
    [43117, '孟大军', '网络', '智慧教室', '程序设计', '智慧教室', '正常', 7.5, '智慧教室1.3Demo，开发离线本地电子书html'],
    [43117, '孟大军', '网络', '智慧教室', '程序设计', '智慧教室', '正常', 7.5, '智慧教室1.3Demo，开发离线本地电子书html'],
    [43117, '孟大军', '网络', '智慧教室', '程序设计', '智慧教室', '正常', 7.5, '智慧教室1.3Demo，开发离线本地电子书html']
];
const range = {s: {c: 0, r:0 }, e: {c:0, r:3} }; // A1:A4
const option = {'!merges': [ range ]};

var buffer = xlsx.build([{name: "mySheetName", data: data}]); // Returns a buffer

fs.writeFileSync('新的2018年1月工作日报.xls', buffer, 'binary');

//一个sheet文档中的内容包含sheet表头 一个excelObj表示一个二维数组，excelObj[i]表示sheet文档中第i+1行的数据集（一行的数据也是数组形式，访问从索引0开始）
/*
let data = [];

for(let i in excelObj){
    let arr=[];
    let value=excelObj[i];
    for(let j in value){
        arr.push(value[j]);
    }
    data.push(arr);
}
let buffer = xlsx.build([
    {
        name:'sheet1',
        data:data
    }
]);

//将文件内容插入新的文件中
fs.writeFileSync('网络程序组2018年1月工作日报.xls', buffer,{'flag':'w'});*/
