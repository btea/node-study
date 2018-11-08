const fs = require('fs');

const readFile = function(filename){
    return new Promise(function(resolve, reject){
        fs.readFile(filename, function(err, data){
            if(err){
              return reject(err);
            }
            resolve(data);
        })
    })
}

const gen = function* (){
    const f1 = yield readFile('./file1.txt');
    const f2 = yield readFile('./file2.txt');
    console.log(f1.toString());
    console.log(f2.toString());
}
var g = gen();
g.next();
g.next();
g.next();

// console.log(fs.readFile('./file1.txt', function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// }))