/*普通文件读取*/

/*同步读取*/
var fs = require('fs');
var data;
var count = 0;
try{
    // data = fs.readFileSync('file.txt','utf-8');
    data = fs.readFileSync('../vue.png','binary');
    // console.log('文件内容：', data);
    console.log('总字节数', sum(data));
    write(data);
}catch(err){
    console.log('读取文件出错：',err.message);
}

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
}

function write(data){
    fs.writeFile('./a.png', data, 'binary', function(err){
        if(err){
            throw Error('copy fail.');
        }
        console.log('复制完成');
    })
}