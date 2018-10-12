var http = require('http');
var socket = require('./socket');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile(__dirname + '/index.html', function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200, 'ok', {
            'Content-Type': 'text/html;charset=utf-8'
        });
        // event();
        // res.write(data);
        console.log(Object.prototype.toString.call(data)); // [object Unit8Array]
        res.end('socket 连接成功')
    })
}).listen(8000);

function event(){
    socket.on('question',function(data){
        socket.emit('answer',data + '：this is answer');
    })
}