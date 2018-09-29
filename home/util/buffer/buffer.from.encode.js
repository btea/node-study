/**
 * Buffer 实例一般用于表示编码字符的序列，比如UTF-8、UCS2、Base64、或十六进制编码的数据。通过使用显示的字符编码，就可以在Buffer实例与普通的JavaScript字符串之间进行相互转换。
 * node.js目前支持的字符编码包括：
 *  'ascii'-仅支持7位ASCII数据。如果去掉高位的话，这种编码是非常快的。
 *  'utf8'-多字节编码的Unicode字符。许多网页和其他格式都使用UTF-8。
 *  'utf16le'-2或4个字节，小字节序编码的Unicode字符。支持代理对（U+10000至U+10FFFF）。
 *  'ucs2'-'utf16le'别名。
 *  'base64'-Base64编码，当从字符串创建 Buffer 时，按照 RFC4648 第 5 章（https://tools.ietf.org/html/rfc4648#section-5）的规定，这种编码也将正确地接受“URL 与文件名安全字母表”。
 *  'latin1'-一种把Buffer编码成一字节编码的字符串方式。
 *  'binary'-'latin1'的别名。
 *  'hex'-将每个字节编码为两个十六进制字符。
 * 
 * Buffer.from(array)。以下是官方文档的说明，也就是说，每个array的元素对应一个字节（8位），取值从0到255（两位十六进制字符，最大为ff,即为十进制255）
 *  Allocates(分配) a new Buffer using an array of octets(八位字节).
*/


/**
 * 数组元素为数字
*/
var buff = Buffer.from([62]); // 10进制
// <Buffer 3e>
// buff[0] === parseInt('3e',16) === 62

var buff = Buffer.from([062]); // 8进制   => 10进制是50  => 16进制是32
// <Buffer 32>
// buff[0] === parseInt(62,8) === parseInt(32,16) === 50

var buff = Buffer.from([0x62]); // 16进制
// <Buffer 62>
// buff[0] === parseInt(62,16) === 98




/**
 * 数组元素为字符串
 * 1、0开头的字符串，在parseInt('062')时，可以解释为62，也可以解释为50(八进制)，通过下面实验可以看到采用了第一种解释。
 * 2、字符串的场景，跟parseInt()有没有关系？？？？
*/

var buff1 = Buffer.from(['62']);
// <Buffer 3e>
// buff1[0] === parseInt('3e',16) === parseInt('62') === 62

var buff1 = Buffer.from(['062']);
// <Buffer 3e>
// buff1[0] === parseInt('3e',16) === parseInt('62') === 62

var buff1 = Buffer.from(['0x62']);
// <Buffer 62>
// buff1[0] === parseInt('62',16) === 92


/**
 * 当数组元素大小超出一个字节
 * 超出的值减去区间值个数，直到当前值位于范围之内
*/
var buff1 = Buffer.from([512]);
console.log(buff1);


/**
 * Buffer.from(['1'])[0] === parseInt('1') === 1
 * Buffer.from('1')[0]和'1'不等，'1'对应的编码是49
*/
var buff2 = Buffer.from(['1']);
console.log(buff2[0] === 1); // true

var buff2 = Buffer.from('1');
// <Buffer 31>
// buff2[0] === parseInt('31',16) === 49
// 编码为1的是个控制符，表示Start of Heading
console.log(String.fromCharCode(49)) // '1'
console.log(String.fromCharCode(1)) // '\u0001'