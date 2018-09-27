var  i = 0;
function count(){
    return ++i;
}
exports.count = count;

// exports对象是当前模块的导出对象，用于导出模块的公有属性和方法
// 别的模块通过require函数使用当前模块时得到的就是当前模块的exports对象