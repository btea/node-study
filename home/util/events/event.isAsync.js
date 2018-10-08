/**
 * 栗子5 异步执行还是顺序执行 
 * 2018/10/08 node v8.11.3实践，事件监听是同步执行
*/

var EventEmitter = require('events');

class Man extends EventEmitter{}

var man = new Man();
man.on('wakeup',function(){
    console.log('man has woken up'); // 这一段先执行，是顺序执行
})
man.emit('wakeup');

console.log('woman has woken up');

// man has woken up
// woman has woken up
