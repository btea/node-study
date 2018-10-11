/**
 * https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/util.md
 * http://nodejs.cn/api/util.html
 * 很有用的调试方法。可以通过 util.debuglog(name) 来创建一个调试fn，这个fn的特点是，只有在运行程序时候，声明环境变量NODE_DEBUG=name，才会打印出调试信息
*/

/**
 * 栗子
 * 若直接执行 node debuglog 不会打印出任何东西
 * 
 * 若执行如下命令 NODE_DEBUG=foo node debuglog ,则会打印出如下内容:
 *  FOO 6736: hello!
 * (说明：6736为当前进程id；FOO为声明的变量名大写）
 * (注：本人测试直接在编辑器终端执行以上命令，会报错，在git bash界面执行该命令则会得到预期结果。)
 * 
 * 若环境变量没有声明，则什么都不会输出
 * 例如执行 NODE_DEBUG=five node debuglog，并不会打印出东西。
*/
process.env.NODE_DEBUG = 'foo';
const util = require('util');
let logger = util.debuglog('foo');

logger('hello!');

/**
 * 可以一次指定多个name，用逗号隔开
*/
util.debuglog('first')('hello world!');
util.debuglog('second')('世界，你好！');
util.debuglog('third')('......');
