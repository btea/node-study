const https = require('https');
const fs = require('fs');
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