/**
 * buf.compare(target[,targetStart[,targetEnd[,sourceStart[,sourceEnd]]]])
 * 同样是对两个buffer实例进行比较，不同的是：
 * 1、可以指定特定比较的范围（通过start、end来指定）
 * 2、返回值为整数，达标buf、target的大小关系
 * 假设返回值为：
 *    0：buf、target大小相同
 *    1: buf大于target，也就是buf应该排在target之后
 *    -1：buf小于target，也就是说buf应该排在target之前  
 */

var buf1 = Buffer.from('ABC');
var buf2 = Buffer.from('BCD');
var buf3 = Buffer.from('ABCD');

console.log(buf1.compare(buf1)) // 0;
console.log(buf1.compare(buf2)) // -1;
console.log(buf1.compare(buf3)) // -1;
console.log(buf2.compare(buf1)) // 1;
console.log(buf2.compare(buf3)) // 1;


console.log([buf1, buf2, buf3]);

console.log([buf1, buf2, buf3].sort(Buffer.compare));


/**
 * Buffer.compare(buf1,buf2)
 * 跟buf.compare(trget)大同小异，一般用于排序。
*/
const buf5 = Buffer.from('1234');
const buf6 = Buffer.from('0123');
const arr = [buf5, buf6];

console.log(arr.sort(Buffer.compare));

/**
 * sort参数https://www.cnblogs.com/saifei/p/9043821.html
*/