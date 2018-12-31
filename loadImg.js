const http = require('http');
const https = require('https');
const fs = require('fs');


const src = 'https://pic3.zhimg.com/v2-5c623006357ec604fb439b6b5d03363a_s.jpg';

const options = {
    hostname: 'pic3.zhimg.com',
    port: 443,
    path: '/v2-5c623006357ec604fb439b6b5d03363a_s.jpg',
    method: 'GET'
}

let req = https.request({
    hostname: 'api.vc.bilibili.com',
    port: 443,
    path: '/link_draw/v2/Doc/index?type=recommend&page_num=0&=page_size=45',
    method: 'GET',
},function(res){
    let data = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        data += chunk;
    });
    res.on('end', function(){
        let items = JSON.parse(data).data.items;
        items.forEach(function(item){
            let src = item.item.pictures[0].img_src;
            toSave(src);
        })
    })
})
req.on('error',function(e){
    console.log('problem with request:' + e.message);
})
req.end();


function toSave(src){
    let {protocol, suffix} = format(src), req;
    if(protocol === 'https'){
        req = https;
    }else{
        req = http;
    }
    startLoad(req, suffix, src);
}

function format(src){
    /**
     * 格式处理，判断是http/https
     * 获取图片格式
    */
    let reg = /:\/{2}/,arr = [],protocol,suffix;
    let imgFormat = /jpg|jpeg|png|gif|webp|mp3|mp4|mkv|hlv/i;
    if(typeof src === 'string'){
        protocol = src.split(reg)[0];
        arr = src.split('.');
        suffix = arr[arr.length - 1];
    }
    if(!imgFormat.test(suffix)){
        suffix = '';
    }

    return {protocol, suffix};
}


function startLoad(pro, suffix, src){
    pro.get(src, function(res){
        let imgData = '', isExist, dir = './img', name;
        res.setEncoding('binary'); // 需设置response的编码为binary
        res.on('data', function(chunk){
            imgData += chunk;
        });
        res.on('end', function(){
            isExist = fs.existsSync(dir);
            // console
            if(isExist){
                name = dir + '/' + Math.random().toString(16).substr(2) + '.' + (suffix || 'jpg');
                dataWrite(name, imgData);
            }else{
                fs.mkdir(dir, function(err){
                    if(err){
                        console.log('创建失败');
                    }else{
                        name = dir + '/' + Math.random().toString(16).substr(2) + '.' + (suffix || 'jpg');
                        dataWrite(name, imgData);
                    }
                })
            }
        });
    })
}

function dataWrite(name, data){
    fs.writeFile(name, data, 'binary', function(err){
        if(err){
            console.log('load fail');
        }else{
            console.log('load success');
        }
    })
}

// toSave(src);
module.exports = toSave;
