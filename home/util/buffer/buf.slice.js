/**
 * 截取：buf.slice([start[,end]])(急缺规则类似于array，含头不含尾)
 * 用于截取buf，并返回一个新的Buffer实例。需要注意的是，这里返回的Buffer实例，指向的仍然是buf的内存地址，所以对新Buffer实例的修改，也会影响到buf。 
*/

var buff1 = Buffer.from('abcde');
console.log(buff1);  // <Buffer 61 62 63 64 65>

var buff2 = buff1.slice();
console.log(buff2);  // <Buffer 61 62 63 64 65>

var buff3 = buff1.slice(1, 3);
console.log(buff3);  // <Buffer 62 63>

buff3[0] = 0x97;

console.log('buff1 ',buff1); // <Buffer 61 97 63 64 65>
console.log('buff2 ',buff2); // <Buffer 61 97 63 64 65>
console.log('buff3 ',buff3); // <Buffer 97 63>

// http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html


