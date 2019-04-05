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


// fs.readFile('./html.js','binary', function(err,res){
//     if(err){
//         console.log('read fail');
//     }
//     console.log(res);
// })

var stream = fs.createReadStream('./video.mp4');
var content = '';
var write = fs.createWriteStream('./a.mp4');

stream.setEncoding('binary');
stream.on('data', function(chunk){
    content += chunk;
    console.log('读取中');
})
stream.on('end', function(){
    console.log('读取完成');
    write.write(content);
    write.end();
})
