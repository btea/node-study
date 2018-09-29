/**
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
console.log(buff);