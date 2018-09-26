/*服务端字符串gzip压缩*/

var http = require('http');
var zlib = require('zlib');

var responseText = 'Hello World';

var server = http.createServer(function(req,res){
    var acceptEncoding = req.headers['accept-encoding'];
    if(acceptEncoding.indexOf('gzip') != -1){
        res.writeHead(200,{
            'content-encoding': 'gzip'
        });
        res.end(zlib.gzipSync(responseText));
    }else{
        res.end(zlib.gzipSync(responseText));
    }
})
server.listen(3000)