/**
 * http://nodejs.cn/api/console.html
 * 无特殊说明，日志都是默认打印到控制台。最常用的是console.log()、console.error()两个方法。
 * console.log(msg)：普通日志打印。
 * console.error(msg)：错误日志打印。
 * console.info(msg)：等同于console.log(msg)
 * console.warn(msg)：等同于console.error(msg)
 * 例子如下：
*/

console.log('log: hello');
console.log('log: hello', 'chyingp');
console.log('log: hello %s', 'chyingp');

console.error('error: hello');
console.error('error: hello', 'chyingp');
console.error('error: hello %s', 'chyingp');

// 输出如下：
// log: hello
// log: hello chyingp
// log: hello chyingp
// error: hello
// error: hello chyingp
// error: hello chyingp


/**
 * 自定义stdout
 * 可以通过new console.Console(stdout, stderr)来创建自定义的console实例
 * 比如你想将调试信息打印到本地文件，可以通过如下代码实现：
*/

var fs = require('fs');
var file = fs.createWriteStream('./stdout.txt');
var logger = new console.Console(file,file);

logger.log('hello');
logger.log('world');


/**
 * 计时
*/
var timeLabel = 'hello';
console.time(timeLabel);
setTimeout(console.timeEnd,1000,timeLabel);


/**
 * 断言
 * 通过 console.assert(value, message) 进行断言。如果value不为true，那么抛出AssertionError异常，并中断程序执行。
 * 如下代码所示，第二个断言报错，程序停止执行。
*/
console.assert(true, '1、right');
// console.assert(false, '2、right', '2、wrong');

/**
 * 为避免程序异常退出，需要对上面的异常进行处理
*/
try{
    console.assert(false, 'error occurred');
}catch(e){
    console.log(e.message);
}

/**
 * 打印错误堆栈 console.trace(msg)
*/

/**
 * 深层打印 console.dir()
*/