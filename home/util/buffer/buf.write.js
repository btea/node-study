/**
 * ASCII码对照表
 * 写：buf.write(string[,offset[,length]][,encoding])
 * 将string写入buf实例，同时返回写入的字节数。
 * 参数如下：
 *   string: 写入的字符串
 *   offset：从buf第几位开始写入，默认是0
 *   length：写入多少字节，默认是buf.length - offset
 *   encoding: 字符串的编码，默认是utf8 
*/

var buff = Buffer.alloc(4);

buff.write('a') // 1
console.log(buff); // a的ascii值是 97,转换成相应的十六进制则是61
// <Buffer 61 00 00 00>  

buff.write('ab');  // 返回 2
console.log(buff);  // 打印 <Buffer 61 62 00 00>


// 若写入的字符超出了0-255的区间，该如何编译？？？
// buff.write('ɸ');
// console.log(buff);