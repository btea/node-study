const http = require('http');
const fs = require('fs');


fs.readFile('/index.js', (err, res) => {
    console.log(res);
})

http.createServer(function(request, response){
    let url = request.url;
    response.setHeader("Content-type", "text/html;charset=UTF-8");
    if(url === '/'){
        response.end(`
        <html>
        <head>
          <title>hello</title>
        </head>
        <body>
          <h1 style="color: aqua; font-size: 25px;">hello</h1>
          <p>world</p>
          <button class="add">添加</button>
          <script src="./index.js"></script>
        </body>
      </html>
        `)
    }
    if(url === '/index.js'){
        fs.readFile('.' + url, (err, res) => {
            response.end(res);
        })
    }
}).listen(2233);