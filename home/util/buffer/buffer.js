/**
 * Buffer是node模块的核心模块，开发者可以用它来处理二进制数据，比如文件流的读写，网络请求数据的处理等。
 * Buffer的API非常多，以下列举一些常用和容易理解的api，包括Buffer实例的创建、比较、连接、拷贝、查找、遍历、类型转换、截取，编码转换等。
 */

/**
 * 创建
 * alloc（分配）
 * new Buffer(array)
 * Buffer.alloc(length)
 * Buffer.allocUnsafe(length)
 * Buffer.from(array)
*/

/**
 * 字符unicode码表 https://www.cnblogs.com/csguo/p/7401874.html
*/


const buf = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])


/**
 * string.charCodeAt(index)得到相应位置字符的unicode码(十进制？)
 * String.fromCharCode(num,...)将得到的字符unicode码转换成对应的字符
 * 
*/
var array = 'buffer'.split('').map(function(v){
    return '0x' + v.charCodeAt(0).toString(16)
});
console.log(array);


// 通过Buffer.alloc创建
var buf1 = Buffer.alloc(10); // 长度为10的buffer，初始值为0x0
var buf2 = Buffer.alloc(10,1); // 长度为10的buffer，初始值为0x1,十个值均相同
var buf3 = Buffer.allocUnsafe(10); // 长度为10的buffer，初始值不确定(值为随机值，经win10 node-v8.11.3测试，后4位的值始终都是00)
var buf4 = Buffer.from([1,2,3]); // 长度为3的buffer，初始值为0x01,0x02,0x03
console.log(buf4);
buf4[0] = 0x0a; // 修改buffer的值，可以直接赋值10进制，也可赋值16进制，默认会进行相应转换
console.log(buf4);