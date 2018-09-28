/**
 * http.Server继承了net.Server,此外，http客户端与http服务端的通信均依赖于socket(net.Socket)。也就是说，
 * 做node服务端编程，net基本是必须的一个模块
 * 从组成来看，net模块主要包含两部分：
 *    net.Server：TCP Server，内部通过socket来实现与客户端的通信
 *    net.Socket: tcp/本地socke的nodet版本的实现，它实现了全双工的stream接口
 */

/**
 * tcp服务端程序
*/
var net = require('net');
var PORT = 3000;
var HOST = '127.0.0.1';

// tcp服务端
var server = net.createServer(function(socket){
    console.log('服务端：收到来自客户端的请求');

    socket.on('data',function(data){
        console.log('服务端：收到来自客户端数据，内容为：{' + data + '}');
        // 给客户端返回数据
        socket.write('你好，我是服务端');
    });
    socket.on('close',function(){
        console.log('服务端：客户端连接断开');
    });
    
});

server.listen(PORT, HOST, function(){
    console.log('服务端：开始监听来自客户端的请求');
})
