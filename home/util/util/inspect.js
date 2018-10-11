/**
 * http://nodejs.cn/api/util.html#util_util_inspect_object_options
 * 调试方法：util.inspcet(obj[,options])
 * 参数说明：
 *   obj：js原始值，或者对象。
 *   options：配置参数，包含下面选项
 *      showHidden<boolean>：如果是true的话，obj的非枚举属性也会被展示出来。默认是false。
 *      depth<number>：如果obj是对象，那么，depth限制对象递归展示的层级，这对可读性有一定的好处，默认是2。如果设置为null，则不做限制。
 *      colors<boolean>：如果为true，则输出样式使用ANSI颜色代码。默认为false。颜色可自定义。
 *      customInspect<boolean>：如果为false，则object上自定义的inspect(depth,opts)函数不会被调用，默认为true。
 *      showProxy<boolean>：如果为true，则 Proxy 对象的对象和函数会展示它们的 target 和 handler 对象。 默认为 false。
 *      maxArrayLength<number>：如果obj是数组，那么限制最大可展示的数组个数。默认是100，如果设置为null，则不做限制。如果设置为0或负数，则一个都不展示。
 *      breakLength<number>：一个对象的键被拆分成多行的长度。设为Infinity则格式化一个对象为单行，默认为60。
 * 
 * util.inspect()方法返回object的字符串表示，主要用于调试。
*/

const util = require('util');
// console.log(util.inspect(util,{showHidden: true, depth: 1}));

console.log(util.isArray(Array));


var obj = {};
Object.defineProperty(obj,'nick',{
    enumerable: false,
    value: 'btea'
});

console.log(util.inspect(obj)); // {}
console.log(util.inspect(obj,{showHidden: true})); // { [nick]: 'btea' }