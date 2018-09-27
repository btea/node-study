/**
 * http模块
 * 服务端server：接受来自客户端的请求，并将客户端请求的地址返回给客户端
 * 客户端client：向服务器发送请求，并将服务器返回的内容打印到控制台
 */

// var http = require('http');

// http server 例子
// var server = http.createServer(function(serverReq,serverRes){
    // var url = serverReq.url;
    // console.log(serverReq);
    // console.log('你访问的地址是：' + url);
// })
// server.listen(8081);

// var client = http.get('http://127.0.0.1:8080',function(clientRes){
//     clientRes.pipe(process.stdout);
// })
/**
 * server: http.Server实例，用来提供服务，处理客户端的请求。
 * client: http.clientReques实例，用来向服务端发起请求。
 * serverReq/ClientRes: 其实都是http.IncomingMessage实例。serverReq用来获取客户端请求的相关信息，如request header；而clientRes用来获取服务端返回的相关信息，比如response.header。
 * serverRes: http.ServerResponse实例
*/


/**
 * http.ServerResponse实例。作用很明确，服务端通过http.ServerResponse实例，来给请求方发送数据。包括发送响应表头，响应主体等。
 * http.IncomingMessage实例。作用：在server端，获取请求发送方的消息，比如请求方法，路径，传递的数据等。在client端，获取server端发送过来的信息，比如请求方法，路径，传递的数据等。
 * http.IncomingMessage实例 有三个属性需要注意：method、statusCode、statusMessage
 * method：只在server端的实例有(serverReq.method)
 * statusCode/statusMessage：只在client端的实例有（也就是clientRes.method）
*/


/**
 * http.Server继承了net.Server(于是需要学习一下net.Server的API、属性、相关事件)
 * net.createServer(fn),回调中的socket是个双工的stream接口，也就是，读取发送方信息，向发送方发送消息都靠他
*/

var net = require('net');
var PORT = 8089;
var HOST = '127.0.0.1';
var server = net.createServer(function(socket){
    console.log('Connected: ' + socket.remoteAddress + ':' + socket.remotePort);
    
    socket.on('data', function(data){
        console.log('DATA ' + socket.remoteAddress + ': ' + data);
        console.log('Data is: ' + data);

        socket.write('Data from you is  "' + data + '"');
    });

    socket.on('close', function(){
         console.log('CLOSED: ' +
            socket.remoteAddress + ' ' + socket.remotePort);
    });
})

server.listen(PORT,HOST);