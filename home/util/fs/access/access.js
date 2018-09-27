/**
 * 访问/权限检测
 * fs.access(path[,mode],callback)
 */

 var fs = require('fs');

 fs.access('../stat/fileStat.js',function(err){
     if(err) throw err;
     console.log('可以访问');
 })

 try{
    fs.accessSync('../stat/fileStat.js');
    console.log('同步可以访问');
 }catch(err){
    throw err;
 }

 