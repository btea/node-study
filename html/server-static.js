const fs = require('fs');


function readStatic(path){
    if(typeof path === 'string'){
        let data,error;
        try{
            data = fs.readFileSync(path,'utf-8');
        }catch(err){
            error = err;
        }
        return {data, error};
    }
}

module.exports = readStatic;

// fs.readFile(path,'utf8',function(err, data){

// })