/**
 * buf.equals(otherBuffer) 
 * 判断两个buffer实例存储的数据是否相同，如果是，就返回true，否则返回false
*/

// 例子一：编码一样，内容相同
var buf1 = Buffer.from('A');
var buf2 = Buffer.from('A');

console.log( buf1.equals(buf2) );  // true

// 例子二：编码一样，内容不同
var buf3 = Buffer.from('A');
var buf4 = Buffer.from('B');

console.log( buf3.equals(buf4) );  // false

// 例子三：编码不一样，内容相同
var buf5 = Buffer.from('ABC');  // <Buffer 41 42 43>
var buf6 = Buffer.from('414243', 'hex');

console.log(buf5.equals(buf6)); // true

var buf7 = [0x01,0x02,0x03];
var buf8 = Buffer.from(buf7);
console.log(buf8.equals(buf7));
