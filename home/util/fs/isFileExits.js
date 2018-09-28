/**
 * 文件是否存在
 * fs.exits()已经是deprecated状态，现在可以通过以下方式判断文件是否存在
 * 
 * fs.access()除了判断文件是否存在（默认模式），还可以用来判断文件的权限
 * 
 * 备忘：fs.constants.F_OK等常量无法获取（node v6.1，mac 10.11.4下，fs.constants是undefined）
 * (本人测试 node v8.11.3,win10 下, fs.contants可以取值)
*/


var fs = require('fs');

console.log(fs.constants); // 一个对象

fs.access('./file.txt',function(err){
    if(err) throw err;
    console.log('abc.txt存在');
})

fs.access('./abc1.txt',function(err){
    if(err) throw err;
    console.log('abc1.txt存在');
})

