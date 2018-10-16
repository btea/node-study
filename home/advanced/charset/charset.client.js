const http = require('http');
const iconv = require('iconv-lite');

const charset = 'gbk';

// 对字符串'你'进行编码
var reqBuff = iconv.encode('你', charset);

var options = {
    hostname: '127.0.0.1',
    port: '3000',
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain',
        'Content-Encoding': 'identify',
        'Charset': charset
    }
}

var client = http.request(options, function(res){
    console.log(res.data);
    res.pipe(process.stdout);
})

client.end(reqBuff);