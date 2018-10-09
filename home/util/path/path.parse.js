/**
 * 路径解析
 * path.parse(path) 
 * 
 * http://nodejs.cn/api/path.html#path_path_normalize_path
 * path.normalize(filepath)
 * https://stackoverflow.com/questions/10822574/difference-between-path-normalize-and-path-resolve-in-node-js
 * 说明：
 *     如果路径为空，返回. ,相当于当前的工作路径。
 *     将对路径中重复的路径分隔符（比如linux下的/）合并成一个。
 *     对路径中 . 或 .. 进行处理。（类似shell里的cd ..）
 *     如果路径最后有/，则保留该/。
 *        
*/

var path = require('path');
var filepath = '/tmp/demo/js/test.js';

var index = 0;

var compare = function(desc, callback){
  console.log('[用例%d]：%s', ++index, desc);
  callback();
  console.log('\n');
};

compare('路径为空', function(){
  // 输出 .
  console.log( path.normalize('') );
});

compare('路径结尾是否带/', function(){
  // 输出 /tmp/demo/js/upload
  console.log( path.normalize('/tmp/demo/js/upload') );

  // /tmp/demo/js/upload/
  console.log( path.normalize('/tmp/demo/js/upload/') );
});

compare('重复的/', function(){
  // 输出 /tmp/demo/js
  console.log( path.normalize('/tmp/demo//js') );
});

compare('路径带..', function(){
  // 输出 /tmp/demo/js
  console.log( path.normalize('/tmp/demo/js/upload/..') );
});

compare('相对路径', function(){
  // 输出 demo/js/upload/
  console.log( path.normalize('./demo/js/upload/') );

  // 输出 demo/js/upload/
  console.log( path.normalize('demo/js/upload/') );
});

compare('不常用边界', function(){
  // 输出 ..
  console.log( path.normalize('./..') );

  // 输出 ..
  console.log( path.normalize('..') );

  // 输出 ../
  console.log( path.normalize('../') );

  // 输出 /
  console.log( path.normalize('/../') );
  
  // 输出 /
  console.log( path.normalize('/..') );
});


// https://github.com/nodejs/node/blob/master/lib/path.js
// path.normalize()


/**
 * 文件路径分解/组合
 * path.format(pathObject)：将pathObject的root、dir、base、name、ext属性，按照一定的规则，组合成一个文件路径。
 * path.parse(filepath)：path.format()的反向操作。
 * 
*/
/**
 * 根据文档描述，以下两者是等价的。
 * root vs dir：两者可以互相替换，区别在于，路径拼接时，root不会自动加/，而dir会。
 * base vs name+ext：两者可以互相替换。
*/

var p1 = path.format({
    root: '/tmp/',
    base: 'hello.js'
});
console.log(p1); //  /tmp/hello.js

var p2 = path.format({
    dir: '/tmp',
    name: 'hello',
    ext: '.js'
});
console.log(p2); //  /tmp/hello.js


/**
 * path.parse(filePath)
 * path.format(pathObject)反向操作
*/

console.log(path.parse('/home/user/dir/filename.txt'))
/**
 * { 
 *    root: '/',
 *    dir: '/home/user/dir',
 *    base: 'filename.txt',
 *    ext: '.txt',
 *    name: 'filename' 
 * }
*/