/**
 * http://nodejs.cn/api/assert.html#assert_assert_equal_actual_expected_message
 * https://www.jb51.net/article/123971.htm
*/

/**
 * assert.equal(actual,expected[,message])
 * actual <any>
 * expected <any>
 * message <String> | <Error>
 * 相当于使用 == 运算符比较两个参数值actual和expected是否相等，如果相等不返回任何值，如果不相等则返回带有message属性的AssertionError，若message为undefined，则为默认的错误信息。
 * == 运算符只是数值相等，并不比较类型相等
 * equal()方法不能比较数组，json等数据类型的数据，换句话说即不进行深度比较，数组和json数据的子对象不进行比较。
 * 
 * Strict mode
 * an alias of assert.strictEqual().
 * 
 * deepEqual()
 * 
 * strictDeepEqual()
*/

const assert = require('assert');

try{
    assert.equal(1,'a');
    console.log('两者相等');
}catch(err){
    console.log('两者不相等');
}
