/**
 * Readable Stream
 * 以下都是nodejs中常见的Readable Stream，还有其他的 http://nodejs.cn/api/stream.html#stream_class_stream_readable
 * http.IncomingRequest
 * fs.createReadStream
 * process.stdin
 * ...
*/

var fs = require('fs');
// 栗子1
fs.readFile('./sample.txt','utf8',function(err, content){
    console.log('demo1：读取文件完成，文件内容是[%s]\n',content);
    // 读取文件完成，文件内容是[this is a txt file.]
})

// 栗子2
var readStream = fs.createReadStream('./sample.txt');
var content = '';

readStream.setEncoding('utf8');

readStream.on('data',function(chunk){
    content += chunk;
});

readStream.on('end',function(chunk){
    console.log('demo2：文件读取完成，文件内容是[%s]\n',content);
    // 读取文件完成，文件内容是[this is a txt file.]
})

// 栗子3
// 这里使用了.pipe(dest),好处是，如果源文件较大，对于降低内存占用有好处。
// fs.createReadStream('./sample.txt').pipe(process.stdout); 
// this is a txt file.  原封不动的输出读取的内容
// 详情见 readable.pipe.js