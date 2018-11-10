const http = require('http');

let context = require('./context');
let request = require('./request');
let response = require('./response');





class Application{
    constructor(){
        this.callbackFunc;
        this.context = context;
        this.request = request;
        this.response = response;
        this.middlewares = [];
    }

    listen(port){
        let server = http.createServer(this.callback());
        server.listen(port);
    }

    use(fn){
        this.callbackFunc = fn;
        this.middlewares.push(fn);
    }

    

    createContext(req, res){
        let ctx = Object.create(this.context);
        ctx.request = Object.create(this.request);
        ctx.response = Object.create(this.response);
        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res;
        return ctx;
    }

    compose(){
        return async ctx => {
            function createNext(middleware, oldNext){
                return async () => {
                    await middleware(ctx, oldNext);
                }
            }
            let len = this.middlewares.length;
            let next = async () => {
                return Promise.resolve();
            };
            for(let i = len - 1; i >= 0; i--){
                let currentMiddleware = this.middlewares[i];
                next = createNext(currentMiddleware, next);
            }
            await next();
        }
    }

    middleware(ctx, fnMiddleware) {
        const res = ctx.res;
        res.statusCode = 404;
        const onerror = err => ctx.onerror(err);
        const handleResponse = () => respond(ctx);
        // onFinished(res, onerror);
        return fnMiddleware(ctx).then(handleResponse).catch(onerror);
    }

    callback(){
        // var _self = this;
        // return function(req, res){
            // _self.callbackFunc(req, res);
        // }
        // 箭头函数写法
        // return (req, res) => {
        //     this.callbackFunc(req, res);
        // }

        return (req, res) => {
            let ctx = this.createContext(req, res);
            let respond = () => this.responseBody(ctx);
            let onerror = (err) => this.onerror(err, ctx);
            let fn = this.compose();
            return fn(ctx);
        }
    }

}

module.exports = Application;