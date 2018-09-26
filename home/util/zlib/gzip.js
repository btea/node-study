/*本地文件压缩*/

var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var inFile = fs.createReadStream('./file.txt');
var out = fs.createWriteStream('./file.txt.gz');

inFile.pipe(gzip).pipe(out);



