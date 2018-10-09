// var colors = require('colors');
// https://blog.csdn.net/autumn84/article/details/44816947
// https://www.colabug.com/141260.html
// https://en.wikipedia.org/wiki/ANSI_escape_code#Colors_and_Styles
/**
 * code 30-37 为字体颜色，91-97为字体颜色的明亮版，40-47为背景色，100-107为背景色的明亮版。terminal的默认字体颜色code是39，默认背景色是49
 * 
 * ---------------------------------------------------
 * |    style    |  code  |    style off    |  code  |
 * |    bold     |   1    |     bold off    |   21   |
 * |     dim     |   2    |     dim off     |   22   |
 * |    italic   |   3    |    italic off   |   23   |
 * |  underline  |   4    |  underline off  |   24   |
 * |   inverse   |   7    |   inverse off   |   27   |
 * |    hidden   |   8    |    hidden off   |   28   |
 * |strikethrough|   9    |strikethrough off|   29   |
 * ---------------------------------------------------
 * 
 * 
 * -----------------------------------------------------------------------------------------
 * |Foreground Code|   30   |   31   |   32   |   33   |   34   |   35   |   36   |   37   |
 * |Background Code|   40   |   41   |   42   |   43   |   44   |   45   |   46   |   47   |
 * |    Normal     |  Black |   Red  | Green  | Yellow |  Blue  |Magenta |  Cyan  |  White | 
 * |    Normal     |  Black |   Red  | Green  | Yellow |  Blue  |Magenta |  Cyan  |  White | 
 * -----------------------------------------------------------------------------------------
*/
var str = `
-----------------------------------------------------------------------------------------
|Foreground Code|   30   |   31   |   32   |   33   |   34   |   35   |   36   |   37   |
|Background Code|   40   |   41   |   42   |   43   |   44   |   45   |   46   |   47   |
|    Normal     |  Black |   Red  | Green  | Yellow |  Blue  |Magenta |  Cyan  |  White | 
|    Normal     |  Black |   Red  | Green  | Yellow |  Blue  |Magenta |  Cyan  |  White | 
-----------------------------------------------------------------------------------------`;

console.log(str);
str.replace(/\n/g,'/                 ');
console.log(str.match(/\n/g));
const styles = {
    black: ["\x1b[30;4m"],
    red: ["\x1b[31m"],
    green: ["\x1b[32;4m"],
    yellow: ["\x1b[33m"],
    blue: ["\x1b[34;4m"],
    magenta: ["\x1b[35m"],
    cyan: ["\x1b[36;4m"],
    white: ["\x1b[37m"]
}

Object.keys(styles).forEach(sty => {
    String.prototype[sty] = function(){
        let _self = this;
        if(typeof _self === 'object'){
            return styles[sty] + _self.toString() + '\x1b[0m';
        }
    }
})

console.log(str.green());

console.log('abc'.black());
console.log('abc'.red());
console.log('abc'.green());
console.log('abc'.yellow());
console.log('abc'.blue());
console.log('abc'.magenta());
console.log('abc'.cyan());
console.log('abc'.white());

// console.log("\033[36;7;92mhello"); //  控制字符[红色文字;绿色背景结束符号hello
// console.log("\033[0m");          //  重置颜色修饰
// console.log("\033[93mworld");    //  控制字符[黄色文字结束符号world
// // console.log("\033[m");          //  重置颜色修饰
// console.log("\x1b[31;42mhello");
// console.log("\x1b[0m");
// console.log("\x1b[33mworld");
// console.log("\x1b[m");

// function getRedTextGreenBg(text) {
//     return '\x1b[31;42m' + text + '\x1b[0m';
// }
  
// console.log(getRedTextGreenBg('hello world'));
// console.log(getRedTextGreenBg('hey'));
// console.log('\x1B[36m%s\x27[0m', 'info');

// console.log(process.stdout.write('\x1B[36minfo\x1B[0m'))