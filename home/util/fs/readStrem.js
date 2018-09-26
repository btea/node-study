/*通过文件流读取内容
*适合读取大文件  
*/
var fs = require('fs');
var readStrem = fs.createReadStream('./file.txt','utf8');

readStrem.on('data',function(chunk){
    console.log('读取数据：'+chunk);
}).on('error',function(err){
    console.log('出错：'+err.message);
}).on('end',function(){ // 没有数据了
    console.log('没有数据了');
}).on('close',function(){ // 已经关闭，不会再有事件抛出
    console.log('已经关闭');
})