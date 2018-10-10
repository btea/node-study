/**
 * https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/readline.md
 * http://nodejs.cn/api/readline.html
 * 
 * readline是个非常实用的模块。如名字所示，主要用来实现逐行读取，比如读取用户输入，或者读取文件内容。常见使用场景有下面几种，本文会逐一举例说明。
 *  文件逐行读取：比如说进行日志分析。
 *  自动完成：比如输入npm，自动提示"help init install"。
 *  命令行工具：比如npm init这种问答式的脚手架工具。
*/
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question('Please input a word: ', function(answer){
//     console.log('You have entered %s', answer.toUpperCase());
//     rl.close();
// })


/**
 * 栗子：文件逐行读取，日志分析
 * 
*/

const fs = require('fs');
const rl1 = readline.createInterface({
    input: fs.createReadStream('./access.log')
});
rl1.on('line', line => {
    console.log('line');
    const arr = line.split(' ');
    console.log('访问时间：%s %s，访问地址：%s', arr[0], arr[1], arr[13]);
})
