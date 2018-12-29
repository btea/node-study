const http = require('http');
const fs = require('fs');
const ws = require('nodejs-websocket');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}
var emitter = new MyEmitter();
emitter.once('connection', function(){
    console.log('连接成功');
})
// http.createServer(function(request, response){
//     fs.readFile('../index.html','utf8',function(err, data){
//         if(err){
//             throw new Error('read this file faild.');
//         }
//         response.writeHead(200,'ok',{
//             'Content-Type': 'text/html;text/html;charset=utf-8'
//         });
//         response.end(data);
//     })
// }).listen(2233);

var server = ws.createServer(function(conn){
    conn.on('text', function(str){
        if(str === 'connection'){
            emitter.emit(str);
        }else{
            // console.log(JSON.parse(str));
            console.log(str);
            conn.sendText(str);
        }
        
        // conn.sendText('已接收到客户端传来消息');
    });
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
}).listen(2333);