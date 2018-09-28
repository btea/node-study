/**
 * Buffer.from()
 */

/**
 * 栗子1：Buffer.from(array)
*/
// [0x62, 0x75, 0x66, 0x66, 0x65, 0x72] 为字符串 "buffer" 
// 0x62 为16进制，转成十进制就是 98，代表的就是字母 b
var buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf);
console.log(buf.toString());


/**
 * 栗子2：Buffer.from(string[,encoding])
 * 通过string创建buffer，跟将buffer转换成字符串时，记得编码保持一致，不然会出现乱码
*/

var buf1 = Buffer.from('this is a tést'); // 默认采用utf-8

console.log(buf1.toString()); // 默认编码是utf-8，所以打印正常
// 'this is a tést'

console.log(buf1.toString('ascii')); // 转换成字符串时，编码不是utf8，乱码
// 'this is a tC)st'

/**
 * 乱码分析
 * var letter = 'é';
 * var buff = Buffer.from(letter);  // 默认编码是utf8，这里占据两个字节 <Buffer c3 a9>
 * var len = buff.length;  // 2
 * var code = buff[0]; // 第一个字节为0xc3，即195：超出ascii的最大支持范围
 * var binary = code.toString(2);  // 195的二进制：10101001
 * var finalBinary = binary.slice(1);  // 将高位的1舍弃，变成：0101001
 * var finalCode = parseInt(finalBinary, 2);  // 0101001 对应的十进制：67
 * var finalLetter = String.fromCharCode(finalCode);  // 67对应的字符：C
 * 同理 0xa9最终转成的ascii字符为)
 * 所以，最终输出为 this is a tC)st
*/


/**
 * 栗子3：Buffer.from(buffer)
 * 创建新的buffer实例，并将buffer的数据拷贝到新的实例中去
*/
var buf2 = Buffer.from('buffer');
var buff2 = Buffer.from(buf2);

console.log(buf2.toString());
console.log(buff2.toString());

buff2[0] = 0x61;
console.log(buf2.toString());
console.log(buff2.toString());