
const name = encodeURI('最强赘婿');

const http = require('http');
const https = require('https');




// http://api.zhuishushenqi.com/
const options = {
    hostname: 'api.zhuishushenqi.com',
    port: 80,
    path: '/book/fuzzy-search?query=' + name +'&start=0&limit=10',
    method: 'GET',
};

let req = http.request(options, function(res){
    res.setEncoding('utf8');
    let data = '';
    res.on('data', function(chunk){
        data += chunk;
    });
    res.on('end', function(){
        let list = JSON.parse(data).books;
        let book = list[2];
        // getDetail(book._id);
        getChapters(book._id);
    })
});
req.on('error',function(e){
    console.log('problem with request:' + e.message);
})
req.end();

// let detail = 'http://api.zhuishushenqi.com/toc/5b99d68f37feecdd4b8c7653?view=chapters';
// let source = 'api.zhuishushenqi.com/toc?view=summary&book=57206c3539a913ad65d35c7b';


// https://github.com/zimplexing/vue-nReader/blob/master/doc/zhuishushenqi.md(url地址)
// 根据book id获取章节
function getChapters(id){
    // let url = 'http://api.zhuishushenqi.com/mix-atoc/5b99d68f37feecdd4b8c7653?view=chapters';
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
            let arr = JSON.parse(data).mixToc.chapters;
            content(arr[0].link);
            // console.log(arr[0])
        })
    });
    chapter.on('error', function(e){
        console.log('error!', e.message);
    });
    chapter.end();
}

// 根据章节链接获取内容
function content(link){
    // let url = 'http://chapterup.zhuishushenqi.com/chapter/http://vip.zhuishushenqi.com/chapter/5817f1161bb2ca566b0a5973?cv=1481275033588'
    // let url1 = 'chapter2.zhuishushenqi.com/chapter/http%3a%2f%2fbook.my716.com%2fgetBooks.aspx%3fmethod%3dcontent%26bookId%3d1127281%26chapterFile%3dU_1212539_201701211420571844_4093_2.txt?k=2124b73d7e2e1945&t=1468223717'
    link = encodeURIComponent(link);
    let cont = http.request({
        hostname: 'chapter2.zhuishushenqi.com',
        port: 80,
        path: '/chapter/' + link + '?k=2124b73d7e2e1945&t=1468223717',
        method: 'GET'  
    }, function(res){
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            // console.log(chunk);
        })
    });
    cont.on('error', function(e){
        console.log('error!', e.message);
    });
    cont.end();
}