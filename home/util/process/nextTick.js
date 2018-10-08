/**
 * 异步：process.nextTick(fn)
 * 使用频率很高，通常用在异步场景。
*/

/**
 * 栗子
*/
console.log('刀剑三');
process.nextTick(function(){
    console.log('魔禁三');
});
console.log('no game no life');

/**
 * node定时器详解 https://mp.weixin.qq.com/s/YLpGdzlKkUDhfi_EhgxG7Q
 * process.nextTick(fn)乍看和setTimeout(fn,0)很像，但实际有实现以及性能上的差异：
 * process.nextTick(fn)将fn放到node事件循环的下一个tick里；
 * process.nextTick(fn)比setTimeout(fn,0)性能高；
*/