/**
 * serverRes  http模块四剑客之一
 * 一个web服务程序，接收到来自客户端的http请求后，向客户端返回正确的响应内容，这就是res的职责。
 * 返回的内容包括：状态代码/状态描述信息、响应头部、响应主体
 */

var http = require('http');
var fs = require('fs');

try{
    var data = fs.readFileSync('./http.html');
}catch(err){
    console.log(err);
}
console.log(data);
 // 设置状态码、状态描述信息、响应主体
var server = http.createServer(function(req,res){
     res.writeHead(200, 'ok', {
         'Content-Type': 'text/html;charset=utf-8'
     });
    //  res.setHeader('Content-Type','text/html;charset=utf-8');
    //  res.write('<p style="color:#6cf;">一个段落 this is a word</p>','utf8');
    res.write(data);
    res.end('hello');
    // fs.readFile('../vue.png','binary', function(err, file){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     res.writeHead(200,{'Content-Type':'image/png'});
    //     res.write(file,'binary');
    //     res.end(file);
    // })
});
server.listen(80);



 /**
  * 
  * 设置状态代码、状态描述信息
    res提供了 res.writeHead()、res.statusCode/res.statusMessage 来实现这个目的。
    举例，如果想要设置 200/ok ，可以

        res.writeHead(200, 'ok');
        也可以

        res.statusCode = 200;
        res.statusMessage = 'ok';
    两者差不多，差异点在于

    res.writeHead() 可以提供额外的功能，比如设置响应头部。
    当响应头部发送出去后，res.statusCode/res.statusMessage 会被设置成已发送出去的 状态代码/状态描述信息。
 */


 /**
  * 设置响应头部
  * res提供了res.writeHead()   res.setHeader()来实现响应头部的设置
  * 
  * res.writeHead(200,ok,{
  *     'Content-Type': 'text/plain'
  * });
  * res.setHeader('Content-Type': 'text/plain')
  * 两种方法都行,差异在于：
  *     res.writeHead不单单是设置header
  *     已经通过res.setHeader()设置了header，res.writeHead()设置同名header，后者会覆盖前者。反之则会报错。
 */


 /**
  * 响应头部操作
  * 增
  * res.setHeader('Content-Type','text/plain')
  * 删
  * res.removeHeader('Content-Type')
  * 改
  * res.setHeader('Content-Type': 'text/plain');
  * res.setHeader('Content-Type': 'text/html'); // 覆盖
  * 查
  * res.getHeader('Content-Type')
  * 
  * 注：res.getHeader(name) name用的小写，比如res.getHeader('content-type'),返回值没做特殊处理（即设置时是怎样返回就怎样）
 */


 /**
  * 设置响应主体
  * res.write()   res.end()
  * 
  * 
  * response.write(chunk[, encoding][, callback])
        chunk：响应主体的内容，可以是string，也可以是buffer。当为string时，encoding参数用来指明编码方式。（默认是utf8）
        encoding：编码方式，默认是 utf8。
        callback：当响应体flushed时触发。（TODO 这里想下更好的解释。。。）
    使用上没什么难度，只是有些注意事项：

    如果 res.write() 被调用时， res.writeHead() 还没被调用过，那么，就会把header flush出去。
    res.write() 可以被调用多次。
    当 res.write(chunk) 第一次被调用时，node 会将 header 信息 以及 chunk 发送到客户端。第二次调用 res.write(chunk) ，node 会认为你是要streaming data（WTF，该怎么翻译）。。。
    Returns true if the entire data was flushed successfully to the kernel buffer. Returns false if all or part of the data was queued in user memory. 'drain' will be emitted when the buffer is free again.

    response.end([data][, encoding][, callback])
    掌握了 res.write() 的话，res.end() 就很简单了。res.end() 的用处是告诉nodejs，header、body都给你了，这次响应就到此为止。

    有点像个语法糖，可以看成下面两个调用的组合。至于callback，当响应传递结束后触发。
    res.write(data, encoding);
    res.end()
 */


// https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/http.res.md