/* 解压和压缩是反向操作 */

var fs = require('fs');
var zlib = require('zlib');

var gunzip = zlib.createGunzip();
var inFile = fs.createReadStream('./file.txt.gz');
var outFile = fs.createWriteStream('./file1.txt');

inFile.pipe(gunzip).pipe(outFile);

