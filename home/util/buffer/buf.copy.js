/**
 * http://nodejs.cn/api/buffer.html
 * 拷贝 ：buf.copy(target[,targetStart[,sourceTarget[,sourceEnd]]])
 *  target: <Buffer>|<Unit8Array> 要拷贝进的Buffer或Unit8Array。
 *  targetStart <integer> target 中开始拷贝进的偏移量。 默认: 0。
 *  sourceStart <integer> buf 中开始拷贝的偏移量。 默认: 0
 *  sourceEnd <integer> buf 中结束拷贝的偏移量（不包含）。 默认: buf.length
 * 返回: <integer> 被拷贝的字节数。
*/


/**
 * 将buf的值拷贝到target里面
 * 1、buf.length大于target.length,只会覆盖到target.length为止，并不会拓展target长度。
 * 2、buf.length小于target.length,则只会覆盖到buf.length所在的位置，target后面超出的部分不影响。 
*/
var buff1 = Buffer.from([1,2]);
var buff2 = Buffer.alloc(1);
console.log(buff1);
console.log(buff2);

buff1.copy(buff2);
console.log('buff1',buff1);
console.log('buff2',buff2);


/**
 * 其他参数比较；例子
*/
var buff3 = Buffer.allocUnsafe(26);
var buff4 = Buffer.allocUnsafe(26).fill('!'); // <Buffer 21 21 21 21 21 21 21...>

for(let i = 0; i < 26; i++){
    buff3[i] = i + 97;
}
buff3.copy(buff4,8,16,20);
console.log(buff4);
//<Buffer 21 21 21 21 21 21 21 21 71 72 73 74 21 21 21 21 21 21 21 21 21 21 21 21 21 21>
console.log(buff4.toString('ascii', 0, 25)); // !!!!!!!!qrst!!!!!!!!!!!!!

console.log(Buffer.copy); //undefined