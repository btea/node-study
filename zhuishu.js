
const bookname = '史上最强赘婿';

const http = require('http');
const https = require('https');
const fs = require('fs');

// http://api.zhuishushenqi.com/
// let detail = 'http://api.zhuishushenqi.com/toc/5b99d68f37feecdd4b8c7653?view=chapters';
// let source = 'api.zhuishushenqi.com/toc?view=summary&book=57206c3539a913ad65d35c7b';


// https://github.com/zimplexing/vue-nReader/blob/master/doc/zhuishushenqi.md(url地址)
// 根据book id获取章节


let chapterNum = 180; // 章节数

let book = {
    search: function(word){
        let name = encodeURIComponent(word),_self = this;
        let req = http.request({
            hostname: 'api.zhuishushenqi.com',
            port: 80,
            path: '/book/fuzzy-search?query=' + name +'&start=0&limit=10',
            method: 'GET',
        }, function(res){
            res.setEncoding('utf8');
            let data = '';
            res.on('data', function(chunk){
                data += chunk;
            });
            res.on('end', function(){
                _self.response.writeHead(200,'ok',{
                    'Content-Type': 'text/plain;charset=utf-8'
                });
                _self.response.end(data);
            })
        });
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
        }, function(res){
            let data = '';
            res.setEncoding('utf8');
            res.on('data', function(chunk){
                data += chunk;
            });
            res.on('end', function(){
                _self.response.writeHead(200,'ok',{
                    'Content-Type': 'text/plain;charset=utf-8'
                });
                _self.response.end(data);
            })
        });
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
        }, function(res){
            res.setEncoding('utf8');
            res.on('data', function(chunk){
                // console.log(chunk);
                data += chunk;
            });
            res.on('end',function(){
                _self.response.writeHead(200,'ok',{
                    'Context-Type': 'text/plain;chaset=utf-8'
                });
                _self.response.end(data);
            })
        });
        cont.on('error', function(e){
            console.log('error!', e.message);
        });
        cont.end();
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
    if(/^\/favicon/.test(url)){
        response.end('');
    }
}).listen(2333);


