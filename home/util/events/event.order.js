/**
 * 栗子4：注册事件监听器前，事件先触发(先触发后注册的话，注册的回调函数不会触发)
*/
var EventEmitter = require('events');

class Man extends EventEmitter{}

var man = new Man();
man.emit('wakeup', 1);

man.on('wakeup',function(index){
    console.log('man has woken up ->' + index);
})

man.emit('wakeup',2);