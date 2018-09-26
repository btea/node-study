var http = require('http');
var zlib = require('zlib');
var fs = require('fs');

var filePath = './index.html';

var server = http.createServer(function(req,res){
    var acceptEncoding = req.headers['accept-encoding'];
    console.log(req);
    console.log(acceptEncoding);
    var gzip;

    if(acceptEncoding.indexOf('gzip') != -1){
        gzip = zlib.createGzip();

        res.writeHead(200,{
            'Content-Encoding': 'gzip'
        });
        fs.createReadStream(filePath).pipe(gzip).pipe(res);
    }else{
        fs.createReadStream(filePath).pipe(gzip).pipe(res);
    }
})
server.listen(3000);