/**
 * 当前工作路径：process.cwd() vs process.chdir(directory)
 * process.cwd()返回当前工作路径
 * process.chdir()切换当前工作路径 
*/

// chdir切换工作路径，切换的是什么工作路径？传入的directory具体指什么，要以什么格式传入?

console.log('Stasrting directory:' + process.cwd());
try{
    process.chdir('/child_process'); 
    console.log('New Directory：' + process.cwd());
}catch(err){
    console.log('chdir：' + err);
}
