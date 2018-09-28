/**
 * url模块用来做URL解析
 * url模块的三个方法：
 *     .parse(urlString): 将url字符串，解析成object，便于开发者操作。
 *     .format(urlObj): .parst()方法的方向操作。
 *     .resove(from, to): 以from为起始地址，解析出完整的目标地址
 */


/**
 * url.parse();
 * 完整语法 url.parse(urlString[,parseQueryString[,slashesDenoteHost]])
 * 备注：
 *  1、parseQueryString：（默认为false）如为false，则urlObject.query为未解析的字符串，比如nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1，且对应的值不会decode；
 *     如果parseQueryString为true，则urlObject.query为object，比如{ nick: '程序猿小卡' }，且值会被decode；
    2、slashesDenoteHos：（默认为false）如果为true，那么类似//foo/bar里的foo就会被认为是hostname；如果为false，则foo被认为是pathname的一部分。
    3、关于解析得到的 urlObject ，会在下一小节进行详细介绍。
*/

var url = require('url');

var str = 'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%e4%b8%ad%e6%96%87#part=1';
// var str = 'https://www.baidu.com/s?wd=js%20decode%E8%BD%AC%E7%A0%81&rsv_spt=1&rsv_iqid=0xb9a69e0a00001569&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&oq=decode%25E8%25BD%25AC%25E7%25A0%2581&rsv_t=39b5eJJpI6kTCYos8gNJCQ636f2gKaJDdSiFs7TjVrJ4IqoxeWw8MKbj0N6bbt5dA1cI&rsv_sug3=21&rsv_pq=b6d5415800023022&rsv_sug2=0&inputT=46522&rsv_sug4=47188';


var obj = url.parse(str, true);
// url.parse第二个参数值默认为false，没有填写时,query值为字符串，并且没有decode
// 当设置为true时，query字段被解析为object，并且decode过
console.log(obj);


/**
 * 栗子：针对路径//foo/bar的处理
*/

var _str = '//foo/bar';
var obj1 = url.parse(_str, true, false);
console.log(obj1);
obj1 = url.parse(_str, true, true);
console.log(obj1);

/**
 * urlObj字段意义：
 *  protocol：协议，需要注意的是包含了:,并且是小写的
 *  slashes: 如果：后面跟了两个//，那么为true
 *  auth：认证信息，如果有密码，为usrname:passwd，如果没有，则为usrname。注意，这里区分大小写。
 *  host：主机名。注意包含了端口，比如ke.qq.com:8080，并且是小写的。
 *  hostname：主机名，不包含端口，并且是小写的。
 *  hash：哈希部分，注意包含了#。
 *  search：查询字符串，注意，包含了?，此外，值是没有经过decode的。
 *  query：字符串 或者 对象。如果是字符串，则是search去掉?，其余一样；如果是对象，那么是decode过的。
 *  path：路径部分，包含search部分。
 *  pathname：路径部分，不包含search部分。
 *  href：原始的地址。不过需要注意的是，protocol、host会被转成小写字母。
*/

/**
 * url拼接  url.format(urlObj)
*/


/**
 * url.resolve(from, to)
*/

url.resolve('/one/two/three','four')      // 'one/two/four'
url.resolve('http://example.com/','/one') // 'http://example.com/one'
url.resolve('http://example.com','/one')  // 'http://example.com/one'
url.resolve('http://example.com/','one')  // 'http://example.com/one'
url.resolve('http://example.com','one')   // 'http://example.com/one'
url.resolve('http://example.com/one', '/two') // 'http://example.com/two'