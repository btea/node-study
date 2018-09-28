/**
 * 在网络安全问题日趋严峻的今天，网站采用https是必然的趋势。
 * 在nodejs中，提供了https这个模块来完成https相关功能，从官方文档上来看，和http模块用法相似
 * 本文主要包含两部分:
 *    1、通过客户端，服务端的例子，对https模块进行入门讲解。
 *    2、如何访问安全证书不受信任的网站。（以12306为例子）
 */


var https = require('https');

https.get('https://www.baidu.com',function(res){
    console.log('status code:' + res.statusCode);
    console.log('headers:' + res.headers);

    res.on('data',function(data){
        process.stdout.write(data)
    })
}).on('error', function(err){
    console.log(err);
})