// fetch('https://randomuser.me/api/').then((res) => {
//     res.json();
// }).then(data => {
//     console.log(data)
// })


var fs = require('fs');

var readFile = function(fileName){
    return new Promise(function(resolve, reject){
        fs.readFile(fileName, function(err,data){
            if(err) return reject(err);
            resolve(data);
        })
    })
}

var gen = function* (){
    var f1 = yield readFile('./a.txt');
    var f2 = yield readFile('./b.txt');
    console.log(f1.toString());
    console.log(f2.toString());
}

var g = gen();

// console.log(1);
g.next().value.then(function(data){
    g.next(data).value.then(function(data){
        g.next(data);
    });
});

// async函数
var async_gen = async function(){
    var f1 = await readFile('./a.txt');
    var f2 = await readFile('./b.txt');
    console.log(f1.toString());
    console.log(f2.toString());
}
console.log('开始执行async函数');
console.log(async_gen());