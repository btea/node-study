/**
 * 当你调用http.request(options)时，会返回ClientRequest实例，主要用来创建HTTP客户端请求。
 * 
 */

/**
 * 简单的get请求
*/
var http = require('http');
var options = {
    protocol: 'http:',
    hostname: 'id.qq.com',
    port: 80,
    path: '/',
    method: 'GET'
};

var client = http.request(options,function(res){
    var data = '';
    res.setEncoding('utf8');
    res.on('data',function(chunk){
        data += chunk;
    });
    res.on('end',function(){
        console.log(data);
    })
})
client.end();