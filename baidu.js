const https = require('https');
const http = require('http');

const loadImg = require('./loadImg');

const src = 'http://service.picasso.adesk.com/v1/vertical/category?adult=false&first=1';
// const options = {
//     hostname: 'service.picasso.adesk.com',
//     port: 80,
//     path: '/v1/vertical/category?adult=false&first=1',
//     method: 'GET'
// };

// 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=search&start=0&count=99&kw=%E6%AF%95%E4%B8%9A&start=0&count=99';
const options = {
    hostname: 'wallpaper.apc.360.cn',
    port: 80,
    path: '/index.php?c=WallPaper&a=search&start=0&count=99&kw=%E5%8A%A8%E6%BC%AB&start=0&count=99',
    method: 'GET'
}

// http.createServer(function(request, response){
    let req = http.request(options, function(res){
        let data = '', allImg = [];
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            // console.log(chunk);
            data += chunk;
        });
        res.on('end', function(){
            dealImg(data);
            return;
            let d = JSON.parse(data).res.category;
            console.log(d);
            d.forEach(function(img){
                allImg.push(img.cover);
            })
            allImg.forEach(function(src){
                loadImg(src);
            })
            // response.end(data);
        })
    });
    req.on('error',function(e){
        console.log('problem with request:' + e.message);
    })
    req.end();
// }).listen(3000)

// 360壁纸
function dealImg(data){
    let d = JSON.parse(data).data;
    d.forEach(img => {
        loadImg(img.url);
    })
}


