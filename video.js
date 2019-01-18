const https = require('https');
const fs = require('fs');
const http = require('http');

const url = 'http://upos-hz-mirrorks3.acgvideo.com/dspxcode/m190117ws2ofucg5zns8w426uhm41hye-1-56.mp4?um_deadline=1547742107&rate=500000&oi=2003137728&um_sign=02e6fa539d800ebe91b4cefdeded979a&gen=dsp&wsTime=1547742107&platform=html5';
// https.get('https://v.qq.com/x/search/?q=' + encodeURI('风声'), function(res){
//     res.setEncoding('utf8');
//     let html = '';
//     res.on('data', function(chunk){
//         html += chunk;
//     });
    
//     res.on('end', function(){
//         console.log(html);
//     })
// })
let req = http.request({
    hostname: 'upos-hz-mirrorks3.acgvideo.com',
    port: 80,
    path: '/dspxcode/m190117ws2ofucg5zns8w426uhm41hye-1-56.mp4?um_deadline=1547742107&rate=500000&oi=2003137728&um_sign=02e6fa539d800ebe91b4cefdeded979a&gen=dsp&wsTime=1547742107&platform=html5',
    method: 'GET',
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0"
    }
}, function(res){
    res.setEncoding('binary');
    let content = '';
    res.on('data', function(chunk){
        console.log('加载中');
        content += chunk;
    });
    res.on('end', function(){
        console.log(content);
        console.log('下载完成');
    })
})
req.on('error',function(e){
    console.log('problem with request:' + e.message);
})
req.end();

// const read = fs.createReadStream(url);
// read.setEncoding('binary');
// let content = '';
// read.on('data', function(chunk){
//     content += chunk;
//     console.log('读取中');
// });
// read.on('end', function(){
//     console.log('读取完成');
// })

