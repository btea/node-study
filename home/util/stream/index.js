const fs = require('fs');
const http = require('http');

let Readstream, writeStream;
Readstream = fs.createReadStream('./Huawei.mp4');
// writeStream = fs.createWriteStream();
http.createServer(function(req, res){
    let url;
    url = req.url;
    if(url === '/'){
        fs.readFile('./index.html', 'utf-8', function(err, data){
            if(err){return;}
            res.end(data);
        })
    }
    if(url === '/data'){
        const path = './Huawei.mp4';
        let read;
        read = fs.createReadStream(path);
        res.writeHead(200,{
            'Content-Type': 'video/mp4',
            'Accept-Ranges': 'bytes'
        });
        // Readstream.pipe(res);
        read.pipe(res);
    }
    
}).listen(2333);
