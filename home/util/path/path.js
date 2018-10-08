/**
 * https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/path.md
 * http://nodejs.cn/api/path.html
 * 在nodejs中，path是个使用频率很高，但却让人又爱又恨的模块。部分因为文档说的不够清晰，部分因为接口的平台差异性。将path的接口按照用途归类，仔细琢磨琢磨，也就没那么费解了。
 * 
 * 获取路径：path.dirname(filepath);
 * 获取文件名：path.basename(filepath);
 * 获取扩展名：path.extname(filepath) 
*/

/**
 * 获取路径
*/
var path = require('path');
// var filepath = path.dirname('./test.js'); //.
var filepath = path.dirname('/home/util/path/path.js'); //  /home/util/path
console.log(filepath);


/**
 * 获取文件名
*/
console.log(path.basename('/home/util/path/path.js'));
// path.js

console.log(path.basename('/home/util/path/path/'));
// path

console.log(path.basename('/home/util/path/path'));
// path

/*如果只想获取文件名，但不包括文件扩展，可以用上第二个参数,如果第二个参数和文件扩展不符,那么返回的结果是包含扩展的文件名*/
console.log(path.basename('/home/util/path/path.js','.json')); // path.js
console.log(path.basename('/home/util/path/path.js','js')); // path.
console.log(path.basename('/home/util/path/path.js','.js')); // path


/**
 * 获取文件扩展名
*/
console.log(path.extname('/home/util/path/path.js')); // .js
console.log(path.extname('/home/util/path/path')); // ''
console.log(path.extname('/home/util/path/path.json')); // .json (不管文件是否存在，都会返回相应的值)

console.log(path.extname('index.html')); // .html
console.log(path.extname('index.coffee.md')); // .md
console.log(path.extname('index.')); // .
console.log(path.extname('.index')); // ''
console.log(path.extname('index')); // ''