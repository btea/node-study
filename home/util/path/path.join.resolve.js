/**
 * 路径组合
 * path.join([...paths])
 * path.resolve([...paths]) 
*/

/**
 * path.join([...paths])
 * 把paths拼起来，再normalize一下。（说的什么鬼？）
*/
var path = require('path');
var joinpath = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(joinpath); //  /foo/bar/baz/asdf

/*path定义的伪代码如下：*/
module.exports.join = function(){
    var paths = Array.prototye.slice.call(arguments, 0);
    return this.normalize( paths.join('/') );
};
// http://nodejs.cn/api/path.html#path_path_normalize_path
console.log(path.normalize("/foo/bar/baz/asdf/quux/.."));


/**
 * path.resolve([...paths])
 * 这个接口的说明有点啰嗦。你可以想象现在你在shell下面，从左到右运行一遍cd path命令，最终获取的绝对路径/文件名，就是这个接口所返回的结果了。
 * 比如 path.resolve('/foo/bar', './baz') 可以看成下面命令的结果
 * cd /foo/bar
 * cd ./baz
*/
console.log(path.resolve('')); // C:/Users/ZYS13/Desktop/node/home/util/path

console.log(path.resolve('.')); // C:/Users/ZYS13/Desktop/node/home/util/path

console.log(path.resolve('/foo/bar','./baz')); // C:/foo/bar/baz

console.log(path.resolve('/foo/bar','./baz/')); // C:/foo/bar/baz

console.log(path.resolve('/foo/bar','./tmp/file/')); // C:/foo/bar/tmp/file

console.log( path.resolve('www', 'js/upload', '../mod.js') ); // C:/Users/ZYS13/Desktop/node/home/util/path/www/js/mod.js