/**
 *  获取相对路径
 *  接口：path.relative(from,to)
 *  描述：从from路径，到to路径的相对路径
 *  边界：
 *      如果from、to指向同个路径，那么，返回空字符串。
 *      如果from、to中任一者为空，那么，返回当前工作路径。 
*/
var path = require('path');
var p1 = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
console.log(p1);  // 输出  "../../impl/bbb"

var p2 = path.relative('/data/demo', '/data/demo');
console.log(p2);  // 输出 ""

var p3 = path.relative('/data/demo', '');
console.log(p3);  // 输出 "../../Users/Raytine/Desktop/node/home/util/path"