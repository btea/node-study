const http = require('http');
const cheerio = require('cheerio');
const loadImg = require('./loadImg');


const src = 'http://tc.ffsky.net/explore/?list=images&sort=views_desc&page=1';

http.get(src, function(res){
    let data = '',allSrc = [];
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        // console.log(chunk);
        data += chunk;
    });
    res.on('end',function(){
        let $ = cheerio.load(data);
        let img = $('img');
        // console.log(img);
        Array.from(img).forEach(function(i){
            // allSrc.push(i.attribs.src);
            loadImg(i.attribs.src);
        });
    })
})