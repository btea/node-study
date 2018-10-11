/**
 * 最常见的Duplex stream应该就是net.Socket实例
*/

// 服务端代码
// var net = require('net');
// var opt = {
//     host: '127.0.0.1',
//     port: '8000'
// };
// var client = net.connect(opt, function(){
//     client.write('msg from client'); // 可写
// })

// // 可读
// client.on('data', function(data){
//     console.log('client: got reply from server [%s]', data);
//     client.end();
// })

// 客户端代码

var net = require('net');
var opt = {
	host: '127.0.0.1',
	port: '8888'
};

var client = net.connect(opt, function(){
	client.write('msg from client');  // 可写
});

// 可读
client.on('data', function(data){
    // lient: got reply from server [reply from server]
	console.log('client: got reply from server [%s]', data);
	client.end();
});

