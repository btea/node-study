/**
 * 转成JSON字符串：buf.toJSON() 
*/

var buff = Buffer.from('hello');
// <Buffer 68 65 6c 6c 6f>
console.log(buff.toJSON());
// {
    // type: 'Buffer',
    // data: [104, 101, 108, 108, 111]
// }