/**
 * Buffer.from()
 * Buffer.from(array)返回一个新建的包含所提供的字节数组副本的Buffer。
 * Buffer.from(arrayBuffer[,byteOffset[,length]])返回一个新建的与给定的ArrayBuffer共享同一内存的Buffer。
 * Buffer.from(buffer)返回一个新建的包含所提供的字符串的副本的Buffer。
 * Buffer.from(string[,encoding])返回一个新建的包含的所提供的字符串的副本的Buffer。
 * Buffer.alloc(size[,fill[,encoding]])返回一个指定大小的被填满的Buffer实例。这个方法会明显的比Buffer.allocUnsafe(size)慢，但可确保新创建的Buffer实例绝对不会包含旧的和潜在的敏感数据。
 * Buffer.allocUnsafe(size)与Buffer.allocUnsafeSlow(size)返回一个新建的指定size的Buffer，但它的内容必须被初始化，可以使用buf.fill(0)或者完全写满
 */

/**
 * 栗子1：Buffer.from(array)
*/
// [0x62, 0x75, 0x66, 0x66, 0x65, 0x72] 为字符串 "buffer" 
// 0x62 为16进制，转成十进制就是 98，代表的就是字母 b
var buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf); // <Buffer 62 75 66 66 65 72>
console.log(buf.toString()); // 'buffer'


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