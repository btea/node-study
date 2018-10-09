/**
 * https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/readline.md
 * http://nodejs.cn/api/readline.html
 * 
 * readline是个非常实用的模块。如名字所示，主要用来实现逐行读取，比如读取用户输入，或者读取文件内容。常见使用场景有下面几种，本文会逐一举例说明。
 *  文件逐行读取：比如说进行日志分析。
 *  自动完成：比如输入npm，自动提示"help init install"。
 *  命令行工具：比如npm init这种问答式的脚手架工具。
*/

var MD5 = require('md5');
var $ = require('jquery');
console.log($);
var appid = '20170825000076973';
// 我的appid
// var key = '12345678';
var key = 'liOElrAvfuetesvJgyJZ';
var salt = (new Date).getTime();;
var obj = {
    wyw: '文言文',
    zh: '中文',
    en: '英文',
    jp: '日语',
    kor: '韩语',
    fra: '法语'
};
var from = 'zh';
var to = 'en';
var query = '中文';
var str1 = appid + query + salt +key;
var sign = MD5(str1);
console.log(sign);
    // $.ajax({
    //         url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
    //         type: 'get',
    //         dataType: 'jsonp',
    //         data: {
    //             q: query,
    //             appid: appid,
    //             salt: salt,
    //             from: from,
    //             to: to,
    //             sign: sign
    //         },
    //         success: function (data) {
    //             console.log(data);
    //         }
    //     });

var http = require('http');
var url = require('url');
var options = {
    protocol: 'https:',
    hostname: 'api.fanyi.baidu.com',
    port: 443,
    path: '/api/trans/vip/translate?q=' + query + '&appid=' + appid +'&salt=' + salt + '&from=' + from + '&to=' + to + '&sign=' + sign,
    method: 'GET'
};
// console.log(url.format(options));
// var url = 
http.get('http://api.fanyi.baidu.com/api/trans/vip/translate?q=' + query + '&appid=' + appid +'&salt=' + salt + '&from=' + from + '&to=' + to + '&sign=' + sign,(res) => {
    // console.log(res);
    res.on('data',res => {
        console.log(res.toString());
    })
})



var readline = require('readline');

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Please input a word: ', function(answer){
//     console.log('You have entered [%s]', answer.toUpperCase());

//     rl.close();
// })
