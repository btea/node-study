const http = require('http');
const fs = require('fs');

// 下载文件中文名及其他参数配置 https://blog.csdn.net/liuyaqi1993/article/details/78275396

let url;
http.createServer(function(request, response){
    url = request.url;
    if(url === '/'){
        fs.readFile('./index.html','utf-8',function(err,res){
            if(err){
                throw Error('read file fail');
            }
            response.write(res);
            response.end();
        })
    }
    if(url === '/download'){
        let name = '文件.xlsx',
            encode = encodeURI(name)
        ;
        response.setHeader('Content-disposition', 'attachment; filename=' + encode);
        response.setHeader('Content-Type', 'application/octet-stream');
        fs.createReadStream(name).pipe(response);

        // let name = 

        // fs.readFile('../file.xlsx','binary',function(err, res){
        //     if(err){
        //         throw Error('read file is failed');
        //     }
        //     response.setHeader('Content-disposition','attachment; filename="file.xlsx"');
        //     response.setHeader('Content-Type','application/octet-stream');
        //     response.write(res);
        //     response.end();
        // })
    }
   
}).listen(3000);