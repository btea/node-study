/**
 * Writbale Stream
*/
const fs = require('fs');
// 栗子1
var content = 'hello world.';
var path = './sample.txt';

fs.writeFile(path, content, err => {
    if(err) throw err;
});
// 注：2018/10/11 node -v8.11.3  fs.writeFile(必须传回调函数) http://nodejs.cn/api/fs.html#fs_fs_writefile_file_data_options_callback


// 栗子2
var contents = 'hello world!世界，你好！';
var writeStream = fs.createWriteStream(path);
writeStream.write(contents);
writeStream.end();