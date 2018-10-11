/**
 * 下面的例子，演示了分多次写入多个字节时，string_decoder模块是怎么处理的。
 * 首先，传入了<Buffer e4 bd a0 e5 a5>，好还差1个字节，此时，decoder.write(xx)返回你。
 * 然后，再次调用decoder.write(Buffer.from([0xbd]))，将剩余的1个字节传入，成功返回好。
*/

const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

// Buffer.from('你好') => <Buffer e4 bd a0 e5 a5 bd>
let str = decoder.write(Buffer.from([0xe4, 0xbd, 0xa0, 0xe5, 0xa5]));
console.log(str);  // 你

// str += decoder.write(Buffer.from([0xbd]));
// console.log(str);

str = decoder.write(Buffer.from([0xbd]));
console.log(str);  // 好
