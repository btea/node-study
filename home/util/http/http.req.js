/**
 * req 是http.IncomingMessage实例，在服务端，客户端作用略微有差异：
 * 服务端：获取请求方的相关信息，如request header等
 * 客户端：获取响应方返回的相关信息，如StatusCode等
 */

 var http = require('http');
 
 var server = http.createServer(function(req,res){
     console.log('1、客户端请求url：'+req.url);
     console.log('2、http版本：'+req.httpVersion);
     console.log('3、http请求方法：'+req.method);
     console.log('4、http请求头部：'+ JSON.stringify(req.headers));
    //  res.end('ok');
    res.end();
 })

 server.listen(3000);

 http.get('http://127.0.0.1:3000',function(res){
     console.log(res.statusCode);
 })


 /**
  * http.IncomingMessage的属性/方法/事件   serverReq/clientRes 都是http.IncomingMessage实例
  *   类型     名称          服务端   客户端
  *   事件    aborted        true     true
  *   事件     close         true     true
  *   属性     headers       true     true
  *   属性    rawHeaders     true     true
  *   属性    statusCode     false    true
  *   属性    statusMessage  false    true
  *   属性     httpVersion   true     true
  *   属性     url           true     false
  *   属性     socket        true     true
  *   方法     .destory()    true     true
  *   方法    .setTimeOut()  true     true
  * 
 */