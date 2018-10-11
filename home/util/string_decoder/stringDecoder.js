/**
 * http://nodejs.cn/api/string_decoder.html
 * string_decoder 字符串解码器
 * string_decoder模块用于将Buffer转成对应的字符串。使用者通过调用stringDecoder.write(buffer)，可以获得buffer对应的字符串。
 * 它的特殊之处在于，当传入的buffer不完整（比如三个字节的字符，只传入了两个），内部会维护一个internal buffer将不完整的字节cache住，
 * 等到使用者再次调用stringDecoder.write(buffer)传入剩余的字节，来拼成完整的字符。
 * 这样可以有效避免buffer不完整带来的错误，对于很多场景，比如网络请求中的包体解析等，非常有用。
*/

/**
 * 栗子1
*/
const stringDecoder = require('string_decoder').StringDecoder;

const decoder = new stringDecoder('utf8');

// Buffer.from('你')  => <Buffer e4 bd a0>   228 176+13=189 160
// encodeURI('你') => '%E4%BD%A0'
const str = decoder.write(Buffer.from([0xe4,0xbd,0xa0]));
console.log(str);
// console.log(Buffer.from([0xe4,0xbd,0xa0]).toString());  // 你

