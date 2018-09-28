/**
 * 创建Server
 */

var http = require('http');
var requestenListener = function(req, res){
    res.end('');
};
var server = http.createServer(requestenListener);
// var server = new http.Server(removeEventListener); // 和上面是等价的 
server.listen(3000)

/**
 * 获取请求方消息  req.method http请求方法   req.httpVersion http版本  req.url  客户端请求url
*/



/**
 * connect vs connection
 * connect: 当客户端的HTTP method为connect时触发
 * connection：当TCP连接建立时，大部分时候可以忽略这个事件（目测模块内部自己用到而已）。此外，可以通过req.connection来获取这个socket（从node.js源码来看，req.socket,req.connection都指向了这个socket）。
 * 此外，socket上的readable事件不会触发（具体原因看模块内部实现。。。）
 * 大部分时候不会用到，除非要开发http代理。当客户端发起connect请求时触发（注意绕过了requestListener）
*/

var http = require('http');
var PORT = 4000;

var server = http.createServer(function(req, res){
    res.end('ok');
});

// 注意：发起connect请求的例子在 ./httpServerEventConnectClient.js 里
server.on('connect',function(req, socket, end){
    console.log('connect事件触发');
    socket.end();
})

server.listen(PORT);

var http = require('http');
var PORT = 5000;
var requestIndex = 0;
var connectionIndex = 0;

var server = http.createServer(function(req, res){
    res.end('ok');
});

server.on('request',function(req, res){
    requestIndex++;
    console.log('request event: 第' + requestIndex + '个请求！');
});

server.on('connection',function(req, res){
    connectionIndex++;
    console.log('connection event: 第' + connectionIndex + '个请求！');
})
server.listen(PORT);



// 不常用接口
// https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/http.server.md

// server.close([callback]);
// 关闭服务器。其实就是(new net.Server()).close(),停止接受新的连接。已经连接上的请求会继续处理，当所有连接都结束的时候，server正式关闭，并抛出close事件。
// 一般提供了callback，就不用监听close；监听了close，就不用添加callback。