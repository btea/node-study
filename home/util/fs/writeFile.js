/**
 * 文件写入
 * 如果文件不存在，则创建文件；如果文件存在，则覆盖其内容
*/

var fs = require('fs');
/**
 * 异步写入
*/
fs.writeFile('./fileForWrite.txt','世界，你好！','utf8',function(err){
    if(err) throw err;
    console.log('文件写入成功');
})

/**
 * 同步写入
*/
try{
    fs.writeFileSync('./fileSync.js','console.log("你好")','utf8');
    console.log('写入成功');
}catch(err){
    throw err;
}

/**
 * 读取一个文件内容写入另一个文件
*/
var data = fs.readFileSync('../counter.js','utf8');
try{
    fs.writeFileSync('./fileToFile.js',data,'utf8');
    console.log('写入data');
}catch(err){
    throw err;
}

/**
 * 通过文件流写入
*/
var writeStream = fs.createWriteStream('./writeStream.js','utf8');
writeStream.on('close',function(){ // 已经关闭，不会再有事件抛出
    console.log('已经关闭')
}); 
writeStream.write('console.log(123)');
writeStream.write(';function a(){ return 1 + 2}');
writeStream.end('');

/**
 *  fs.write(fd,buffer,offset,length[,position],callback)
 *  fs.write(fd,data[,position[,encoding]],callback)
 *  fs.writeSync(fd,buffer,offset,length[,position])
 *  fs.writeSync(fd,data[,position[,encoding]])
 * 
 * fd: 写入的文件句柄
 * buffer：写入的内容
 * offset：将buffer从offset位置开始，长度为length的内容写入
 * length: 写入的buffer内容的长度
 * position：从打开文件的position写入？
 * callback：参数为（err，written，buffer）。written表示有xx字节的buffer被写入
 * 备注：fs.write(fd, buffer, offset, length[, position], callback)跟
 *  fs.write(fd, data[, position[, encoding]], callback)的区别在于：
 *  后面的只能把所有的data写入，而前面的可以写入指定的data子串？
*/


