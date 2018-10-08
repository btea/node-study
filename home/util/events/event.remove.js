/**
 * 栗子6  移除事件监听器 
*/

var EventEmitter = require('events');

class Man extends EventEmitter{}

var man = new Man();

function wakeup(){
    console.log('man has woken up');
}

man.on('wakeup',wakeup);
man.emit('wakeup');

man.removeListener('wakeup',wakeup);
man.emit('wakeup');
