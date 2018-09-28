/**
 * 通过dgram实现广播功能很简单，服务端代码如下
 */

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

var port = 33333;
server.on('message', function(msg, rinfo){
    console.log(msg);
    console.log('server got message from :' + rinfo.address + ':' + rinfo.port);
})
server.bind(port);