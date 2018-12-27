

const http = require('http');
const https = require('https');
const fs = require('fs');

// http://api.zhuishushenqi.com/
// let detail = 'http://api.zhuishushenqi.com/toc/5b99d68f37feecdd4b8c7653?view=chapters';
// let source = 'api.zhuishushenqi.com/toc?view=summary&book=57206c3539a913ad65d35c7b';


// https://github.com/zimplexing/vue-nReader/blob/master/doc/zhuishushenqi.md(url地址)
// 根据book id获取章节


let book = {
    search: function(word){
        let name = encodeURIComponent(word),_self = this;
        let req = http.request({
            hostname: 'api.zhuishushenqi.com',
            port: 80,
            path: '/book/fuzzy-search?query=' + name +'&start=0&limit=10',
            method: 'GET',
        }, this.responseDeal);
        req.on('error',function(e){
            console.log('problem with request:' + e.message);
        })
        req.end();
    },

    allChapters: function(id){
        /**
         * @param id book_id
        */
        // let url = 'http://api.zhuishushenqi.com/mix-atoc/5b99d68f37feecdd4b8c7653?view=chapters';
        let _self = this;
        let chapter = http.request({
            hostname: 'api.zhuishushenqi.com',
            port: 80,
            path: '/mix-atoc/' + id + '?view=chapters',
            method: 'GET'
        }, this.responseDeal);
        chapter.on('error', function(e){
            console.log('error!', e.message);
        });
        chapter.end();
    },
    chapterContent: function(link){
        // let url = 'http://chapterup.zhuishushenqi.com/chapter/http://vip.zhuishushenqi.com/chapter/5817f1161bb2ca566b0a5973?cv=1481275033588'
        // let url1 = 'chapter2.zhuishushenqi.com/chapter/http%3a%2f%2fbook.my716.com%2fgetBooks.aspx%3fmethod%3dcontent%26bookId%3d1127281%26chapterFile%3dU_1212539_201701211420571844_4093_2.txt?k=2124b73d7e2e1945&t=1468223717'
        link = encodeURIComponent(link);
        let data = '', _self = this;
        let cont = http.request({
            hostname: 'chapter2.zhuishushenqi.com',
            port: 80,
            path: '/chapter/' + link + '?k=2124b73d7e2e1945&t=1468223717',
            method: 'GET'  
        }, this.responseDeal);
        cont.on('error', function(e){
            console.log('error!', e.message);
        });
        cont.end();
    },
    // 处理每个请求的响应部分
    responseDeal: function(res){
        var data = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            data += chunk;
        });
        res.on('end',function(){
            book.response.writeHead(200,'ok',{
                'Context-Type': 'text/plain;chaset=utf-8'
            });
            book.response.end(data);
        })
    },
    // 背景图片分类获取
    types: ['recommend','hot','new'],
    biliPicturesApi: function(type, num, size){
        // https://api.vc.bilibili.com/link_draw/v2/Doc/index?type=hot&page_num=0&page_size=45
        let data = '', _self = this;
        num = num || 0;
        size = size || 45;
        let items = https.request({
            hostname: 'api.vc.bilibili.com',
            port: 443,
            path: '/link_draw/v2/Doc/index?type=' + type + '&page_num=' + num + '&=page_size=' + size,
            method: 'GET',
            // headers: {
            //     "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
            // }
        },this.responseDeal);
        items.on('error', function(e){
            console.log('error!', e.message);
        });
        items.end();
    }
}


http.createServer(function(request, response){
    let url = request.url;
    if(url === '/'){
        fs.readFile('./html/index.html', 'utf8', function(e, data){
            if(e){
                console.log(e);
            }else{
                response.end(data);
            }
        })
    }
    if(/^\/book/.test(url)){
        let word = url.split('?')[1].split('=')[1];
        book.response = response;
        book.search(word);
    }
    if(/^\/allChapters/.test(url)){
        let id = url.split('?')[1].split('=')[1];
        book.response = response;
        book.allChapters(id);
    }
    if(/^\/text/.test(url)){
        let link = url.split('link=')[1];
        book.response = response;
        book.chapterContent(link);
    }
    if(/^\/bili/.test(url)){
        let type = book.types[Math.floor(Math.random() * 3)];
        book.response = response;
        book.biliPicturesApi(type);
    }
    if(/^\/favicon/.test(url)){
        response.end('');
    }
}).listen(2333);


