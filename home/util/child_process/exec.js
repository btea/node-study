/**
 * child.process.exec(command[,options][,callback]) 
 * 创建一个shell，然后在shell里面执行命令。执行完成后，将stdout、stderr作为参数传入回调函数。
 * spawns a shell and runs a command within that shell,passing the stdout and stderr to a callback function when complete. 
*/

var exec = require('child_process').exec;

exec('ls -al',function(error, stdout, stderr){
    if(error){
        console.log('error:' + error);
        return ;
    }
    console.log('stdout', stdout);
    console.log('stderr', typeof stderr);
})


exec('ls hello.txt', function(error, stdout, stderr){
    if(error){
        console.log('error:' + error);
        return ;
    }
    console.log('stdout', stdout);
    console.log('stderr', stderr);
})