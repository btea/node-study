/**
 * http://nodejs.cn/api/child_process.html#child_process_child_process_spawn_command_args_options
 * 在node中，child_process（子进程）模块非常重要
 * child_process.spawn(command[,args][,options])
 * command <string> 要运行的命令。
 * args <Array> 字符串参数列表。
 * options <Object> 
 *   cwd <string> 子进程的当前工作目录。
 *   env <Object> 环境变量键值对。
 *   argv0 <string> 显示的设置要发给子进程的argv[0]的值。如果未指定，则设为command。
 *   stdio <Array> | <string> 子进程stdio配置。
 *   detached <boolean> 准备将子进程独立于父进程运行。
 *   uid <number> 设置该进程的用户标识。
*/


// 会报错，ls是linux才有的？？？
// var spawn = require('child_process').spawn;
// var ls = spawn('ls',['-lh','/usr']);

// ls.stdout.on('data',(data) => {
//     console.log(`stdout:${data}`);
// })


// ls.stderr.on('data', (data) => {
//     console.log(`stderr: ${data}`);
// });
  
// ls.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });

// 仅限windows系统
var spawn = require('child_process').spawn;
var bat = spawn('cmd.exe',['/c','my.bat']);

bat.stdout.on('data',data => {
    console.log(data.toString());
})

bat.stderr.on('data',data => {
    console.log(data.toString());
})

bat.on('exit',(code) => {
    console.log(`子进程退出码${code}`);
})

// 几种创建子进程的方式
/**
 * 注意事项：一下列出的都是异步创建子进程的方式，每一种方式都有对应的同步版本：
 * .exec()、.execFile()、.fork()底层都是通过.spawn()实现的。
 * .exec()、execFile()额外提供了回调，当子进程停止的时候执行。
 * child_process.spawn(command[, args][, options]) 
 * child_process.exec(command[, options][, callback]) 
 * child_process.execFile(file[, args][, options][, callback]) 
 * child_process.fork(modulePath[, args][, options])
*/