/**
 * 转成字符串：buf.toString([encoding[,start[,end]]])
 * 把buf码解析成字符串 
*/

var buff = Buffer.from('hello');
console.log(buff); // <Buffer 68 65 6c 6c 6f>
console.log(buff.toString()); // hello
console.log(buff.toString('utf8',0,2)); // he