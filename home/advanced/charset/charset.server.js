const http = require('http');
const iconv = require('iconv-lite');

// 假设客户端采用post发送方式，编码为gbk
var server = http.createServer(function(req, res){
    var chunks = [];
    req.on('data', function(chunk){
        chunks.push(chunk);
    })
    
    req.on('end', function(){
        console.log(chunks);
        chunks = Buffer.concat(chunks);

        // 对二进制进行解码
        var body = iconv.decode(chunks, 'gbk');
        console.log(body);
        res.end('HELLO FROM SERVER');
    })
}).listen(3000);