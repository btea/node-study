const http = require('http');
const fs = require('fs');

http.createServer(function(request, response){
    let url = request.url;
    if(url === '/'){
        response.setHeader('Content-type','text/html;charset=utf-8');
        response.end(`
            <html>
                <title>ssr</title>
                <body>
                    <h1>这是一个标题</h1>
                    <button class="add">添加</button>
                    <script src="./index.js"></script>
                </body>
            </html>
        `)
    }
    if(url === '/index.js'){
        response.setHeader('Content-type','text/x-javascript;charset=utf-8');
        fs.readFile('.' + url, (err, str) => {
            response.end(str);
        })
    }
}).listen(2233);