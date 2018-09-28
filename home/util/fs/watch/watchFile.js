/**
 * fs.watch() vs fs.watchFile()高效更多  （why？）
*/
var fs = require('fs');
/**
 * fs.watchFile()
 * 实现原理：轮询。每隔一段时间检查文件是否发生变化。所以在不同平台上表现基本一致。
*/
var options = {
    presistent: true, // 默认就是true
    interval: 2000 // 多久检查一次
};
// curr,prev是被监听文件的状态，fs.stat的实例
// 可以通过fs.unwatch()移除监听
fs.watchFile('./watch.js',options, function(curr,prev){
    console.log(curr);
    console.log('修改时间为：'+curr.mtime);
})