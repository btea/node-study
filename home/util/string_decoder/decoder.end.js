/**
 * 栗子
 * 当decoder.end([buffer])被调用时，内部剩余的buffer会被一次性返回。
 * 如果此时带上buffer参数，那么相当于同时调用decoder.write(buffer)和decoder.end()。
*/

const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

// Buffer.from('你好') => <Buffer e4 bd a0 e5 a5 bd>
let str = decoder.write(Buffer.from([0xe4, 0xbd, 0xa0, 0xe5, 0xa5]));
console.log(str);  // 你
console.log(Buffer.from([0xe4,0xbd,0xa0,0xe5,0xa5]).toString()); 
// 你�  buffer.toString()可以将buffer转换成相应的字符串，但若传入的Buffer不完整，就会乱码，而用string_decoder就可以避免这种问题

str = decoder.end(Buffer.from([0xbd]));
console.log(str);  // 好



console.log(Buffer.from('�'))
// <Buffer ef bf bd> 
// https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/string_decoder.md
// 当utf-8码点无效时，替换成ef bf bd


// decoder.end(buffer)时，仅传入了好的第1个字节，此时调用decoder.end()，返回了�，对应的buffer为<Buffer ef bf bd>。

// Buffer.from('好') => <Buffer e5 a5 bd>
let str = decoder.end( Buffer.from([0xe5]) );
console.log(str);  // �
console.log(Buffer.from(str));  // <Buffer ef bf bd>