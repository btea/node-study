const https = require('https');

https.get('https://v.qq.com/x/search/?q=' + encodeURI('风声'), function(res){
    res.setEncoding('utf8');
    let html = '';
    res.on('data', function(chunk){
        html += chunk;
    });
    
    res.on('end', function(){
        console.log(html);
    })
})