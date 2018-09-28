/**
 * querystring模块用来做url查询参数的解析
 * 总共有四个方法，常用的.parse()  **.stringify()**两个方法
 *  .parse():对url查询参数（字符串）进行解析，生成易于分析的json格式
 *  .stringify():和.parse()相反，用于拼接查询
*/

/**
 * 查询参数解析：querystring.parse()
 * 参数：querystring.parse(str[,sep[,eq[,options]]])
 * 第四个参数几乎不会用到。第二个，第三个也比较少用到，但可能会用到。
*/

var querystring = require('querystring');
var str = 'nick=a&age=24';
var obj = querystring.parse(str);

console.log(obj);
console.log(typeof obj);
console.log(JSON.stringify(obj, null, 4));

/**
 * JSON.stringify(value[,replacer[,space]])
 * value: 将要序列化成一个JSON字符串的值
 * replacer: 可选，可以为函数或者数组
 *    值为数组: 则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中，replacer作key值（这个在讲实例的时候就知道这个key是干嘛的了，先记住就好）
 *    值为函数：则把系列化后的每一个对象（记住是每一个）传进方法里面进行处理
 * space：可选，指定缩进用的空白字符
 *    1、如果省略的话，那么显示出来的值就没有分隔符。直接输出来 
      2、如果是一个数字的话，那么它就定义缩进几个字符，范围是：0到10（数字小于1，则默认为0，大于10，则默认为10）
      3、如果是一些转义字符，比如“\t”，表示回车，那么它每行一个回车。 
      4、如果仅仅是字符串，就在每行输出值的时候把这些字符串附加上去就OK。当然，最大长度也是10个字符
*/


var str1 = 'nick=casper&age=24&extra=name-chyingp|country-cn';
var obj1 = querystring.parse(str1);
var obj2 = querystring.parse(obj1.extra, '|', '-');
console.log(JSON.stringify(obj2, null, 4));

/**
 * '{
 *     "name": "chyingp",
 *     "country": "cn"
 * }'
*/

/**
 * querystring.stringify(obj)   querystring.parse的逆向操作
*/
