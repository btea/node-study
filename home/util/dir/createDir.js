/**
 * 创建目录
 * 如果目录已经存在，则会报错
 */

/**
 * 异步版本
 * 
 */
var fs = require('fs');
fs.mkdir('./hello',function(err){
    if(err) throw err;
    console.log('目录创建成功');
})

/**
 * 同步版本
*/
try{
    fs.mkdirSync('./world');
}catch(err){
    console.log('world已经存在');
}




fs.mkdir('sub',function(err){
    if(err){
        return err;
    }
    console.log('sub创建成功');
})

try{
    fs.mkdirSync('sup');
    console.log('sup创建成功');
}catch(err){

}

/**
 * 删除文件 fs.unlink  fs.unlinkSync
*/