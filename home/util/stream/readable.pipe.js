var fs = require('fs');
var onEnd = function(){
    process.stdout.write(']');
}
var fileStream = fs.createReadStream('./sample.txt');
fileStream.on('end',onEnd);

fileStream.pipe(process.stdout);
process.stdout.write('demo3：读取文件完成，文件内容是[')

console.log('\n顺序读取\n')