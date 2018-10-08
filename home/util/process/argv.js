/**
 * 获取命令行参数: process.argv
 * process.argv返回一个数组，数组元素分别如下：
 *  元素1：node
 *  元素2：可执行文件的绝对路径
 *  元素x：其他，比如参数等 
*/

process.argv.forEach(function(val, index, array){
    console.log('参数：' + index + '：' + val);
})
console.log(process.argv);
/*
[ 
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\Raytine\\Desktop\\node\\home\\util\\process\\argv',
    '--env',
    'production' 
]
*/


/**
 * 获取node specific 参数：process.execArgv
 * 跟process.argv看着像，但差异很大。它会返回node specific（具体的；明确的）的参数(也就是运行node程序特有的参数，比如--harmony)。这部分参数不会出现在process.argv里面。
*/


/**
 * node --harmony argv --nick zys
 * execArgv只能拿到--harmony
 * argv 只能拿到--harmony以外的其他参数
*/
process.execArgv.forEach(function(val, index, array){
    console.log('execArgv' + index + '：' + val);
});

process.argv.forEach(function(val, index, array){
    console.log(index + '：' + val);
})