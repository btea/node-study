/**
 * http://nodejs.cn/api/buffer.html
 * buffer连接：Buffer.concat(list[,totalLength])
 * 备注：个人觉得totalLength这个参数挺多余的，从官方文档来看，是处于性能提升的角度考虑。不过内部实现也只是遍历list，将length累加得到totalLength，从这点来看，性能优化是几乎可以忽略不计的。
 * list <Array>要合并的Buffer或Unit8Array实例的数组
 * totalLength <integer>合并时list中Buffer实例的总长度
*/

var buff1 = Buffer.alloc(10).fill(0x01);
var buff2 = Buffer.alloc(20).fill(0x02);

var totalLength = buff1.length + buff2.length;
console.log(totalLength) // 30

// 不添加totalLength参数，返回的是两个Buffer的组合
var buff3 = Buffer.concat([buff1,buff2],5);
console.log(buff3);

/**
 * totalLength存在时：
 *  totalLength可以是string，也可以是number，不管是string或number，可以为小数，但不能包含数字以外的字符，否则返回Buffer长度为0，也不能为负数，否则报错
 *  1、totalLength等于list所有length之和时，返回值和未添加totalLength时一致。
 *  2、totalLength大于list所有length之和时，返回值后面多余的位置用 00 填充。
 *  3、totalLength小于list所有length之和时，返回值截取值totalLength所在的位置，后面舍弃。
*/

