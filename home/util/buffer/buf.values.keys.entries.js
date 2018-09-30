/**
 * 遍历： buf.values()、buf.keys()、buf.entries() 
*/

var buff = Buffer.from('abcde');

for(const key of buff.keys()){
    // console.log('key is ' + key);
}
// key is 0
// key is 1
// key is 2
// key is 3
// key is 4

for(const value of buff.values()){
    // console.log('value is  ' + value);
}
// value is  97
// value is  98
// value is  99
// value is  100
// value is  101

for(const pair of buff.entries()){
    // console.log(pair);
    console.log('buff[%d] === %d', pair[0], pair[1]);
}

// https://www.cnblogs.com/mytzq/p/4816992.html
// console对象的上面5种方法，都可以使用printf风格的占位符。不过，占位符的种类比较少，只支持字符（%s）、整数（%d或%i）、浮点数（%f）和对象（%o）四种。