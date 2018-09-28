/**
 * 向地址'255.255.255.255:33333'进行广播
 */


var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var msg = Buffer.from('hello world!');
var port = 33333;
var host = '255.255.255.255';

client.bind(function(){
    client.setBroadcast(true);
    client.send(msg, port, host, function(err){
        if(err) throw err;
        console.log('message has been sent');
        client.close();
    })
})