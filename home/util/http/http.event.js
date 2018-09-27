/**
 * 当客户端：
 *  abort(中止)请求时，服务端req的aborted事件和close事件都会触发
 *  请求正常完成时，服务端req的close事件不会触发
 */

var http = require('http');

var server = http.createServer(function(req,res){
    console.log('1、收到客户端请求: ' + req.url);
    
    req.on('aborted', function(){
        console.log('2、客户端请求aborted');
    });
    
    req.on('close', function(){
        console.log('3、客户端请求close');
    });
    
    // res.end('ok'); 故意不返回，等着客户端中断请求
})

server.listen(3000,function(){
    var client = http.get('http://127.0.0.1:3000/aborted');
    setTimeout(function(){
        client.abort();
    },3000);
})