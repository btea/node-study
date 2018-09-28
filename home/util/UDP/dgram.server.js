/**
 * http://nodejs.cn/api/dgram.html
 * dgram(数据报)模块是对UDP socket的一层封装，相对net简单很多
 */

var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4') // udp4/udp6  有什么区别？

server.on('listening',function(){
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
})

/**
 * @param message <Buffer>-- 消息
 * @param remote/rinfo <Object>-- 远程地址消息
 *  address <string> 发送方地址
 *  family <string> 地址类型('IPv4' or 'IPv6') port <number> 发送者端口  size <number> 消息大小
*/

server.on('message',function(message, remote){  // remote/rinfo 
    console.log(remote.address + ':' + remote.port +' - ' + message);
})

server.bind(PORT,HOST);



/**
 * dgram.Socket类
 * dgram.Socket对象是一个封装了数据包函数功能的EventEmitter
 * dgram.Socket实例是由dgram.createSocket()创建的。创建dgram.Socket实例不需要new关键字。
*/