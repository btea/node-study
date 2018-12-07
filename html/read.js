const http = require('http');
const fs = require('fs');

const serverStatic = require('./server-static');

let express = require('express'), app = express();

const resolve = require('path').resolve;

console.log(__dirname);
console.log(resolve(__dirname));
app.use('/',express.static(__dirname));

http.createServer(app).listen(3000);

// http.createServer(function(request, response){
    // let result = serverStatic('./index.html');
    // console.log(result);
    // if(result.error){
    //     console.log('读取文件失败');
    // }else{
    //     response.writeHead(200, 'ok', {
    //         'Content-Type': 'text/html;charset=utf-8'
    //     });
    //     response.end(result.data);
    // }
// }).listen(3000);