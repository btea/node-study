/**
 * 查找：buf.indexOf(value[,byteOffset][,encoding])
 * 跟数组的查找差不多，需要注意的是，value可能是String、Buffer、Integer中的任意类型。
 *  String：如果是字符串，那么encoding就是其对应的编码，默认是utf8。
 *  Buffer：如果是Buffer实例，那么会将value中的完整数据，跟buf进行对比。
 *  Integer：如果是数字，那么value会被当做无符号的8位整数，取值范围是0到255
 *  可以通过指定byteOffset来指定查找起始位置。  
*/

var buf = Buffer.from('this is a buffer');

console.log(buf.indexOf('this'));  // 0

console.log(buf.indexOf('is'));  // 2

console.log(buf.indexOf(Buffer.from('a buffer'))); // 8

// (97 is the decimal(十进制) ASCII value for 'a')
console.log(buf.indexOf(97)); // 8

console.log(buf.indexOf(Buffer.from('a buffer example'))); // -1

console.log(buf.indexOf(Buffer.from('a buffer example').slice(0, 8))); // 8


const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'ucs2');

console.log(utf16Buffer);
console.log(Buffer.indexOf);
console.log(utf16Buffer.indexOf('\u03a3', 0, 'ucs2')); // 4

console.log(utf16Buffer.indexOf('\u03a3', -4, 'ucs2')); // 6

