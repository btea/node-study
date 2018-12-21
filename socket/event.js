/**
 * EventEmitter.on() 用于注册监听器
 * EventEmitter.emit() 用于触发事件
*/
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const emitter = new MyEmitter();

// EventEmitter 实例在新的监听器被添加到其内部监听数组之前，会触发自身的 'newListener' 事件
// 只处理一次，避免无限循环
emitter.once('newListener',(event, listener) => {
    if(event === 'event'){
        // 在前面插入一个新的监听器
        emitter.on('event', () => {
            console.log('B');
        })
    }
})
emitter.on('event',() => {
    console.log('A');
});
emitter.emit('event');

// 默认情况下，如果为特定事件添加了超过10个监听器，则EventEmitter会打印一个警告。这有助于发现内存泄漏。
// 但是，并不是所有的事件都要限制10个监听器。emitter.setMaxListeners()方法可以为指定的 EventEmitter 实例修改限制。
// 值设为 Infinity （或 0 ）表示不限制监听器的数量。

// emitter.setMaxListeners(Infinity);
// emitter.on('aa', function(){
//     console.log(1);
// });
// emitter.on('aa', function(){
//     console.log(2);
// })
// emitter.on('aa', function(){
//     console.log(3);
// })
// emitter.on('aa', function(){
//     console.log(4);
// });
// emitter.on('aa', function(){
//     console.log(5);
// })
// emitter.on('aa', function(){
//     console.log(6);
// })
// emitter.on('aa', function(){
//     console.log(7);
// });
// emitter.on('aa', function(){
//     console.log(8);
// })
// emitter.on('aa', function(){
//     console.log(9);
// })
// emitter.on('aa', function(){
//     console.log(10);
// })
// emitter.on('aa', function(){
//     console.log(11);
// })
// emitter.emit('aa');