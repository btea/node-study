
/**
 * 证书问题   私钥、证书 不会弄？？？
 * 
 * https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/https.md
*/




var https = require('https');

https.get('https://kyfw.12306.cn/otn/regist/init',function(res){
    res.on('data',function(data){
        process.stdout.write(data);
    })
}).on('error',function(err){
    console.log(err);
})