const https = require('https');
const qs = require('querystring');
const data = {
    uid: '587f40b52f301e0057ac3874',
    client_id: '1541836680513',
    token: 'eyJhY2Nlc3NfdG9rZW4iOiJ1c2ZtdlB0em13T3p3azdGIiwicmVmcmVzaF90b2tlbiI6ImV1eXh6cTVKR2hxN09OdHkiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D',
    src: 'web',
    id: '5b23a5aef265da59716fda09'
}

const options = {
    hostname: 'xiaoce-cache-api-ms.juejin.im',
    port: 443,
    path: 'v1/getSection?' + qs.stringify(data),
    method: 'GET'
};

let req = https.request(options, function(res){
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        console.log(chunk);
    });
    res.on('end', function(){
        console.log('请求返回');
    })
})
req.on('error',function(e){
    console.log('problem with request:' + e.message);
})
req.end();