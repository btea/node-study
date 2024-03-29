const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(async (ctx) => {
    if(ctx.url === '/' && ctx.method === 'GET'){
        // 当get请求时返回页面
        let html = `
            <h1>koa2 request post demo</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>nickName</p>
                <input name="nickName" /><br/>
                <p>email</p>
                <input name="email" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    }else if(ctx.url === '/' && ctx.method === 'POST'){
        // 当post请求的时候，中间件koa-bodyParser解析POST表单里的数据，并显示出来
        let postData = ctx.request.body;
        ctx.body = postData;
    }
})

app.listen(3000, () => {
    console.log('[demo] request post is starting at port 3000');
})