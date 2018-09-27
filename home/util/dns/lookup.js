/**
 * 域名解析
 * dns.lookup()
 */

var dns = require('dns');

dns.lookup('www.baidu.com',function(err,address,family){
    if(err) throw err;
    console.log('ip:' + address);
    console.log(family);
})

// 同一个域名可能对应多个不同的ip。可以用如下方式获取一个域名对应的多个ip
var options = {
    all: true
};
dns.lookup('www.qq.com',options,function(err, address, family){
    if(err) throw err;
    console.log(address);
    console.log(family);
})


dns.resolve4('www.qq.com', function(err, address){
    if(err) throw err;
    console.log( JSON.stringify(address) );
});

/**
 * 可能最大的差异就在于，当配置了本地Host时，是否会对查询结果产生影响。
 * dns.lookup()：有影响。
 * dns.resolve4()：没有影响。
*/

// https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/dns.md