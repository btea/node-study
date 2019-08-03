const http = require('http');
const fs = require('fs');
// const request = require('superagent');
const querystring = require('querystring');
const multer = require('multer');
// let url = 'http://upos-hz-mirrorks3.acgvideo.com/dspxcode/m190121ws1dvpsa8qc87dgs8qs8nqus6-1-56.mp4?um_deadline=1548072049&rate=500000&oi=2003138365&um_sign=36943318d1b7498715b51b6c9ab883cc&gen=dsp&wsTime=1548072049&platform=html5';

let upload = multer({dest: './files'});

http.createServer(function(request, response){
    let url = request.url;
    if(url === '/'){
        fs.readFile('./index.html','utf-8',function(err, res){
            if(err){
                throw Error('read file fail');
            }
            response.end(res);
        })
    }
    if(url === '/favicon.ico'){
        response.end();
    }
    if(/^\/upload/.test(url)){
        // let obj = '', name = url.split('?')[1].split('=')[1], $res = {};
        let $data = '';
        // request.setEncoding('binary');
        console.log(request.headers['content-type']);
        // const isFile = mime(req) === 'multipart/form-data';
        // if (hasBody(req) && isFile) {
            var buffers = [];
            request.on('data', function (chunk) {
                buffers.push(chunk);
            });
            request.on('end', function () {
                // 处理文件名
                let requestBody = Buffer.concat(buffers).toString('binary');
                let file = querystring.parse(requestBody, '\r\n', ': ')
                let fileInfo = file['Content-Disposition']
                fileInfo = Buffer.from(fileInfo, 'binary').toString()
                let { filename } = querystring.parse(fileInfo, '; ', '=')
                filename = filename.slice(1, -1)
                filename = `./static/${filename}`
                // 处理内容
                let boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '');
                let contentType = file['Content-Type']
                if (!contentType.includes('image')) return
                let upperBoundary = requestBody.indexOf(contentType) + contentType.length;
                let shorterData = requestBody.substring(upperBoundary)
                let binaryDataAlmost = shorterData.trim()
                let binaryData = binaryDataAlmost.substring(0, binaryDataAlmost.indexOf(`--${boundary}--`))
                // 写入文件
                fs.writeFile(filename, binaryData, 'binary', (err) => {
                    if (err) {
                    console.log('上传失败')
                    } else {
                    console.log('上传成功', filename)
                    }
                })
            });
            return;
        // }
        request.on('data', function(data){
            $data += data;
            // console.log
        });
        request.on('end', function(){
            // console.log($data);
            var data = $data;
            // return;
            // var base64 = obj.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
            // var dataBuffer = new Buffer(base64, 'base64'), path = './' + new Date().getTime() + '.png'; //把base64码转成buffer对象，
            // // fs.writeFile(path, dataBuffer, function(err){
            // //     if(err){
            // //         console.log('load fail');
            // //     }else{
            // //         console.log('load success');
            // //         $res.code = 200;
            // //         $res.msg = '上传完成';
            // //         $res.url = path;
            // //         response.end(JSON.stringify($res));
            // //     }
            // // })
            let path = './' + Date.now() + '.jpg', $res = {};
            fs.writeFile(path, data, 'binary', function(err){
                if(err){
                    console.log('load fail');
                }else{
                    console.log('load success');
                    $res.code = 200;
                    $res.msg = '上传完成';
                    $res.url = path;
                    response.end(JSON.stringify($res));
                }
            })
            
        })
        
        // console.log(request.client.Socket.parser);
        // console.log(request.file);
    }else{
        let format = url.split('.'),
        type = format[format.length - 1]
        ;
        if(~['png','jpg','jpeg','webp','gif','js','html','json','pdf','mp4'].indexOf(type)){
            console.log(url);
            response.writeHead(200, {'Content-Type': 'text/' + type});
            response.end(fs.readFileSync('./' + url));
        }
    }

    
}).listen(3000);




// request.get(url).end(function(err, res){
//     if(err){
//         throw Error('fetch file is fail.')
//     }
//     let arr = [];
//     // let write = fs.createWriteStream('./a.mp4');
//     res.setEncoding('binary');
//     res.on('data', function(chunk){
//         // console.log('下载中');
//         // str += chunk;
//         // chunk.pipe(write);
//         Buffer.concat(arr, chunk);
//     });
//     res.on('end', function(){
//         console.log('完成');
//     })
// })

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