/**
 * 格式化打印：util.format(format[,...args])
 * 
*/
var util = require('util');
console.log(util.format('hello %s','world!'));
// 输出：hello world!

console.log(util.format('1 + 1 = %d',2));
// 输出：1 + 1 = 2

console.log(util.format('info：%s',{nick: 'tea'})); // 输出：info：[object Object]
console.log(util.format('info：%d',{nick: 'tea'})); // 输出：info：NaN
console.log(util.format('info：%j',{nick: 'tea'})); // 输出：info：{"nick":"tea"}

console.log(util.format('%s is %d age old', 'tea')); // 输出：tea is %d age old
console.log(util.format('%s is %d age old', 'tea', 5000)); // 输出：tea is 5000 age old
console.log(util.format('%d is %s age old', 'tea', 5000)); // 输出：NaN is 5000 age old
console.log(util.format('%j is %d age old', 'tea', 5000)); // 输出："tea" is 5000 age old

console.log(util.format('%s is a man', 'tea', 'strong', 10, 'a')); // tea is a man strong 10 a
console.log(util.format('%d is a man', 'tea', 'strong', 10, 'a')); // NaN is a man strong 10 a