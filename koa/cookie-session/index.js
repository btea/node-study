const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    if(ctx.url === '/index'){
        ctx.set.cookie(
            'cid',
            'hello world',
            {
                domain: 'localhost', //写cookie所在的域名
                path: '/index', // 写cookie所在的路径
                maxAge: 10 * 60 * 1000, // cookie有效时长
                expires: new Date('2018-11-23'), // cookie失效时间
                httpOnly: false, // 只用于http中获取
                overwrite: false, // 是否允许重写
            }
        )
        ctx.body = 'cookie is ok';
    }else{
        ctx.body = 'hello world';
    }
})
app.listen(3000)