/*普通文件读取*/

/*同步读取*/
var fs = require('fs');
var data;
try{
    data = fs.readFileSync('file.txt','utf-8');
    console.log('文件内容：', data)
}catch(err){
    console.log('读取文件出错：',err.message);
}