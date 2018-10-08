/**
 * http://nodejs.cn/api/inspector.html (注：node debug已被弃用，可用node inspect代替)
 * https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/debug.md
 * 谈到node断点调试，目前主要有三种方式，通过node内置调试工具、通过IDE（如vscode）、通过node-inspector，三者本质上差不多。
 * 本文着重点在于介绍 如何在本地通过node-inspector 调试远程服务器上的node代码。 
*/

var nick = 'z';
var city = 'hangzhou';
debugger;
var str = nick + ' live in ' + city;
console.log(str);