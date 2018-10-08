/**
 * 栗子3：只运行一次的事件监听器
*/
var EventEmitter = require('events');
class Man extends EventEmitter{}

var man = new Man();
man.on('wakeup',function(){
    console.log('man has woken up');
});

man.once('wakeup',function(){
    console.log('man has woken up again');
})

man.emit('wakeup');
man.emit('wakeup');