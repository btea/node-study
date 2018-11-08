const fs = require('fs');

const readStream = fs.createReadStream('./name.txt');

readStream.on('data',function(chunk){
    console.log(chunk.length);
}).on('error',function(){
    console.log('读取数据报错');
}).on('end',function(){
    console.log('已经没有数据了');
}).on('close',function(){
    console.log('已经关闭');
})