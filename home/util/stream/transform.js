/**
 * Transform stream是Duplex stream的特例，也就是说，Transform stream也同时可读可写。
 * 跟Duplex stream的区别点在于，Transform stream的输出与输入是存在相关性的。
 * 常见的Transform stream包括zlib、crypto，这里举个简单例子：文件的gzip压缩。
*/

var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var inFile = fs.createReadStream('./fileForCompress.txt');
var out = fs.createWriteStream('./fileForCompress.txt.gz');

inFile.pipe(gzip).pipe(out);