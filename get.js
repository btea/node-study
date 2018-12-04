const http = require('http');
const https = require('https');
const qs = require('querystring');

const baseUrl = 'https://www.zhihu.com/api/v3/feed/topstory/hot-list-web';
const params = {
    limit: 50,
    desktop: true
};

let content = qs.stringify(params);
let options = {
    hostname: 'www.zhihu.com',
    port: 443,
    path: '/api/v3/feed/topstory/hot-list-web?' + content,
    method: 'GET',
    // method: 'POST',
    // header: {
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // }
};



http.createServer(function(request, response){
    let req = https.request(options, function(res){
        res.setEncoding('utf8');
        let data = '';
        res.on('data', function(chunk){
            data += chunk;
        });
        res.on('end', function(){
            response.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
            response.end(data);
        })
    })
    
    req.on('error',function(e){
        console.log('problem with request:' + e.message);
    })
    req.end();
}).listen(2333);