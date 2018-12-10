const fs = require('fs');
const cheerio = require('cheerio');
const http = require('http');

function readStatic(path, res){
    if(typeof path === 'string'){
        // let title = /^(<title>)\w+(<\/title>)?/gm;
        fs.readFile(path,'utf8',function(err, data){
            if(err){
                console.log('err',err);
            }else{
                // console.log(data);
                let $ = cheerio.load(data);
                let title = $('title').html();
                let body = $('body').html();
                let html = `
                    <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>${title}</title>
                        </head>
                    <body>
                        ${body}
                    </body>
                    </html>
                `;
                res.write(html);
                res.end();
            }
        })
    }
}



http.createServer(function(request, response){
    response.writeHead(200, 'ok', {
        'Content-Type': 'text/html;charset=utf-8'
    });
    readStatic('./index.html', response);
}).listen(3000);

module.exports = readStatic;

