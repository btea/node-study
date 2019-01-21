const http = require('http');
const fs = require('fs');
const request = require('superagent');
let url = 'http://upos-hz-mirrorks3.acgvideo.com/dspxcode/m190121ws1dvpsa8qc87dgs8qs8nqus6-1-56.mp4?um_deadline=1548072049&rate=500000&oi=2003138365&um_sign=36943318d1b7498715b51b6c9ab883cc&gen=dsp&wsTime=1548072049&platform=html5';

// http.createServer(function(request, response){
//     let url = request.url;
//     if(url === '/'){
//         fs.readFile('./index.html','utf-8',function(err, res){
//             if(err){
//                 throw Error('read file fail');
//             }
//             response.end(res);
//         })
//     }
//     if(url === '/favicon.ico'){
//         response.end();
//     }
//     if(/^\/upload/.test(url)){
//         let obj = '', name = url.split('?')[1].split('=')[1];
//         request.on('data', function(data){
//             console.log(data.toString());
//             console.log(url);
//             console.log('接收数据');
//             console.log(name);
//         })
//         // console.log(request.client.Socket.parser);
//         // console.log(request.file);
//     }
// }).listen(3000);




request.get(url).end(function(err, res){
    if(err){
        throw Error('fetch file is fail.')
    }
    let arr = [];
    // let write = fs.createWriteStream('./a.mp4');
    res.setEncoding('binary');
    res.on('data', function(chunk){
        // console.log('下载中');
        // str += chunk;
        // chunk.pipe(write);
        Buffer.concat(arr, chunk);
    });
    res.on('end', function(){
        console.log('完成');
    })
})

// let httpStream = request({
//     method: 'get',
//     url: url
// }), str = '';
// httpStream.on('data', function(chunk){
//     console.log('加载中');
//     str += chunk;
// });
// httpStream.on('end', function(){
//     console.log('完成');
//     console.log(str);
// })