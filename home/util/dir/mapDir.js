/**
 * fs.readdirSync()只会读一层，所以需要判断文件类型是否目录，如果是，则进行递归遍历
 * fs.readdirSync(path[,options])
 * 
 * path.resolve()  fs.statSync()
*/

var fs = require('fs');
var path = require('path');

var getFileDir = function(dir){
    var result = [path.resolve(dir)];
    var files = fs.readdirSync(dir,'utf8');

    files.forEach(function(file){
        file = path.resolve(dir, file);
        var stats = fs.statSync(file);

        if(stats.isFile()){
            result.push(file);
        }else if(stats.isDirectory()){
            result = result.concat(getFileDir(file));
        }
    })
    return result;
}

var files = getFileDir('../');
console.log(files);

/**
 * 文件重命名
 * fs.rename(oldPath, newPath, callback)
*/