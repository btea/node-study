/**
 * 填充: buf.fill(value[,offset[,end]][,encoding])
 * 用value填充buf，常用于初始化buf。参数说明如下：
 * value：用来填充的内容，可以是String、Buffer或Integer。
 * offset：从第几位开始填充，默认是0。
 * end：停止填充的位置，默认是buf.length。
 * encoding：如果value是String，那么为value的编码，默认是utf8。
*/

var buff = Buffer.alloc(10).fill('a');

console.log(buff); // <Buffer 61 61 61 61 61 61 61 61 61 61>
console.log(buff.toString()); // aaaaaaaaaa