/*普通文件读取*/

/*同步读取*/
var fs = require('fs');
var data;
var count = 0;
try{
    // data = fs.readFileSync('file.txt','utf-8');
    data = fs.readFileSync('../vue.png','binary');
    // data = fs.readdirSync('8.xls');
    // console.log('文件内容：', data);
    console.log('总字节数', sum(data));
    // write(data);
}catch(err){
    console.log('读取文件出错：',err.message);
}

// fs.readFile('./8.xls', 'binary', function(err, res){
    // if(err){
        // throw Error('read fail');
    // }
    // console.log('总字节长度', sum(res));
// })

function sum(str){
    // console.log(new Buffer(str));
    for(var i = 0; i < str.length; i++){
        var code = str.charCodeAt(i);
        if(code <= 0x007f){
            count += 1;
        }else if(code <= 0x07ff){
            count += 2;
        }else if(code <= 0xffff){
            count += 3;
        }else{
            count += 4;
        }
    };
    return count;
    // return size(count);
}


function size(bit){
    let suffix = ['KB','MB','GB'],s;
    if(bit < 1024){
        s = bit + 'B';
    }else if(bit >= 1024 && bit < 1024 * 1024){
        s = suffix[0];
        s = Math.floor(bit / 1024) + s;
    }else if(bit >= 1024 * 1024 && bit < 1024 * 1024 * 1024){
        s = suffix[1];
        s = Math.floor(bit / 1024 / 1024) + s;
    }
    return s;
}

function write(data){
    fs.writeFile('./a.png', data, 'binary', function(err){
        if(err){
            throw Error('copy fail.');
        }
        console.log('复制完成');
    })
}