/**
 * http://nodejs.cn/api/child_process.html#child_process_child_process_spawn_command_args_options
 * 在node中，child_process模块非常重要
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

var spawn = require('child_process').spawn;
var ls = spawn('ls',['-lh','/usr']);

ls.stdout.on('data',(data) => {
    console.log(`stdout:${data}`);
})


ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});
  
ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});