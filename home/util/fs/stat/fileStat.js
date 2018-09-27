/**
 * 获取文件状态
 * fs.stat() vs fs.fstat() : 文件路径 vs 文件句柄
 * fs.stat() vs fs.lstat() : 如果文件是软链接，那么fs.stat()返回目标文件的状态，fs.lstat() 返回软链接本身的状态
 * fs.stat(path, callback) fs.statSync(path);
 * fs.fstat(fd, callback) fs.fstatSync(fd);
 * fs.lstat(path, callback) fs.lstatSync(path);
 */

 /**方法
  * stats fs.stat()的值
  * stats.isFile() -- 是否文件
  * stats.isDirectory() -- 是否目录
  * stats.isBlockDevice() -- ?
  * stats.isCharacterDevice() -- ?
  * stats.isSymbolicLink() -- ?
  * stats.isFIFO() -- ?
  * stats.isSocket() -- 是不是socket文件？
 */

/**
 * 属性
 * Stats {
    dev: 0,
    mode: 0,
    nlink: 0,
    uid: 0,
    gid: 0,
    rdev: 0,
    blksize: undefined,
    ino: 0,
    size: 0,
    blocks: undefined,
    atimeMs: 0,
    mtimeMs: 0,
    ctimeMs: 0,
    birthtimeMs: 0,
    atime: 1970-01-01T00:00:00.000Z, // Access Time 访问时间
    mtime: 1970-01-01T00:00:00.000Z, // Modified Time 文件内容修改事件
    ctime: 1970-01-01T00:00:00.000Z, // Changed Time 文件状态修改时间，比如修改文件所有者、修改权限、重命名等
    birthtime: 2018-09-27T03:06:24.972Z // Birth Time 创建时间。在某些系统上是 不可靠的，因为拿不到。
   }
*/
var fs = require('fs');

var getTimeDesc = function(d){
    return [d.getFullYear(), d.getMonth()+1, d.getDate()].join('-') + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
};

fs.stat('../watch/watch.js', function(err, stats){
    console.log('文件大小: ' + stats.size);
    console.log('创建时间: ' + getTimeDesc(stats.birthtime));
    console.log('访问时间: ' + getTimeDesc(stats.atime));
    console.log('修改时间: ' + getTimeDesc(stats.mtime));
});