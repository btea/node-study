var express = require("express");
var app = express();
var fs = require('fs');
var querystring = require('querystring');
/*
    1. 保存在文件夹中的文件为二进制，所以想在本地点开能预览的，取消下面fs模块引用的注释
    2. 并在命令行中输入 npm install fs --save
*/
// var fs = require("fs");

var multer = require("multer");
// 这里dest对应的值是你要将上传的文件存的文件夹
var upload = multer({dest:'./public/uploads'});
app.get('/', (request, response) => {
    fs.readFile('./index.html','utf-8',function(err, res){
        if(err){
            throw Error('read file fail');
        }
        response.end(res);
    })
})
// https://blog.csdn.net/qq_32682137/article/details/84030429
app.post("/upload", upload.single('file'),(req, res) => {
   
    // req.file 是 'file' 文件的信息 （前端传递的文件类型在req.file中获取）
    // req.body 将具有文本域数据，如果存在的话  。（上面前端代码中传递的date字段在req.body中获取）

    // ---------- 因为保存的文件为二进制，取消下面代码块注释可让保存的图片文件在本地文件夹中预览 ------
    /*
    var file_type;
    if (req.file.mimetype.split('/')[0] == 'image') file_type = '.' + req.file.mimetype.split('/')[1];
    if (file_type) {
        fs.rename(req.file.path, req.file.path + file_type, function (err, doc) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('55');
            res.send('./uploads/' + req.file.filename + file_type)
        })
        return;
    }
    */
    // ---------------------
    console.log(req.headers['content-type']);
    return;
    // const isFile = mime(req) === 'multipart/form-data';
    // if (hasBody(req) && isFile) {
        // var buffers = [];
        // req.on('data', function (chunk) {
        //     buffers.push(chunk);
        // });
        // req.on('end', function () {
        //     // 处理文件名
        //     let requestBody = Buffer.concat(buffers).toString('binary');
        //     let file = querystring.parse(requestBody, '\r\n', ': ')
        //     let fileInfo = file['Content-Disposition']
        //     fileInfo = Buffer.from(fileInfo, 'binary').toString()
        //     let { filename } = querystring.parse(fileInfo, '; ', '=')
        //     filename = filename.slice(1, -1)
        //     filename = `./static/${filename}`
        //     // 处理内容
        //     let boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '');
        //     let contentType = file['Content-Type']
        //     if (!contentType.includes('image')) return
        //     let upperBoundary = requestBody.indexOf(contentType) + contentType.length;
        //     let shorterData = requestBody.substring(upperBoundary)
        //     let binaryDataAlmost = shorterData.trim()
        //     let binaryData = binaryDataAlmost.substring(0, binaryDataAlmost.indexOf(`--${boundary}--`))
        //     // 写入文件
        //     fs.writeFile(filename, binaryData, 'binary', (err) => {
        //         if (err) {
        //         console.log('上传失败')
        //         } else {
        //         console.log('上传成功', filename)
        //         }
        //     })
        // });
    // }

    res.send('./uploads/' + req.file.filename)
})
app.listen(9999);