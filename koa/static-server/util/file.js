const fs = require('fs');

/**
 * 读取文件方法
 * @param {string} 文件本地的绝对路径
 * @return {string|binary}
*/
function file(filePath){
    let content = fs.readdirSync(filePath, 'binary');
    return content;
}
module.exports = file;