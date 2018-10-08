/**
 * https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/process.md
 * http://nodejs.cn/api/process.html
 * process对象是一个全局变量，它提供当前Node.js进程有关信息，以及控制当前Node.js进程。因为是全局变量，所以无需使用require()。
 *  
*/

/**
 * 环境变量：process.env
*/

if(process.env.NODE_ENV === 'production'){
    console.log('生产环境');
}else{
    console.log('非生产环境');
}