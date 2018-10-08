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