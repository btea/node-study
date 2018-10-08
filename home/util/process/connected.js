/**
 * IPC相关
 * process.connected: 如果当前进程是子进程，且与父进程之间通过IPC通道连接着，则为true；
 * process.disconnect(): 断开与父进程之间的IPC通道，此时会将process.connected设置为false； 
*/

var child_process = require('child_process');
child_process.fork('./connectedChild.js',{
    stdio: 'inherit'
})