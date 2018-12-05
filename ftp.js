const https = require('https');
const http = require('http');


const src = 'https://blog.csdn.net/xingyun89114/article/details/80699527';
http.createServer(function(request, response){
    let req = https.get(src, function(res){
        res.setEncoding('utf8');
        let data = '';
        res.on('data', function(chunk){
            console.log(chunk);
            data += chunk;
        })
        res.on('end', function(){
            response.end(data);
        })
    })
}).listen(2333)
