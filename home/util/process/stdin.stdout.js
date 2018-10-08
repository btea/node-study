/**
 * http://nodejs.cn/api/process.html#process_process_argv
 * 标准输入、标准输出、标准错误输出： process.stdin、process.stdout、process.stderr
*/


// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//     var chunk = process.stdin.read();
//     if(chunk !== null){
//         process.stdout.write(`data：${chunk}`);
//     }
// })
// process.stdin.on('end', () => {
//     process.stdout.write('end');
// })



// process.stdout 属性返回连接到 stdout (fd 1)的流。 它是一个net.Socket (它是一个Duplex流)， 除非 fd 1 指向一个文件，在这种情况下它是一个[可写][]流。
// 栗子 要求用户输入两个数字，然后把和输出到终端。

/*1、声明变量*/
var num1,num2;
/*2、像屏幕输出提示信息*/
process.stdout.write('请输入num1的值 ');
/*3、监听用户输入的值*/
process.stdin.on('data',function(chunk){
    if(!num1){
        console.log(chunk);
        console.log(chunk.toString());
        num1 = Number(chunk);
        /*4、像屏幕输出提示信息，要求输入num2*/
        process.stdout.write('请输入num2的值 ')
    }else{
        num2 = Number(chunk);
        process.stdout.write('结果是：' + (num1 + num2));
        process.exit();
    }
})


// process.stdout.write('终止批处理操作吗(Y/N)？ ');
// process.stdin.on('data',function(chunk){
//     if(chunk.toString().replace(/\r\n/g,'').toLowerCase() === 'y'){
//         process.exit();
//     }
// })