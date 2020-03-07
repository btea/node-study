const https = require('https');

https.get('https://api.gushi.ci/all.json', function(res){
    let data = '';
    res.setEncoding('utf-8');
    res.on('data', function(chunk){
        data += chunk;
    });
    res.on('end', function(){
        console.log(data);
    })
    
})