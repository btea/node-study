/**
 * http://nodejs.cn/api/events.html
 * https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/events.md    
 * events模块是node的核心模块之一，几乎所有常用的node模块都继承了events模块，比如http、fs等。
 * 模块本身很简单，API虽然不少，但常用的不多，列举几个栗子： 
*/

/**
 * 栗子1：单个事件监听
*/
var EventEmitter = require('events');
class Man extends EventEmitter{}

var man = new Man();
man.on('wakeup',function(){
    console.log('man has woken up');
})

/**
 * 栗子2：同个事件，多个事件监听器
*/

man.on('wakeup',function(){
    console.log('man has woken up again')
})

man.emit('wakeup');


