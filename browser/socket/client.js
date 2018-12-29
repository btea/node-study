/**
 * websocket socket.io
 */
// http://www.cnblogs.com/mazg/p/5467960.html
var ws = new WebSocket('ws//localhost:8080');
ws.open = function(){
    ws.send('Test!');
};
ws.onmessage = function(evt){
    console.log(evt.data);
    // ws.close();
};
ws.onclose = function(evt){
    console.log('WebSocketClosed!');
};
ws.onerror = function(evt){
    console.log('WebSocketError!');
}