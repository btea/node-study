let questions = [],answers = [],len, i = 0,objList,result = [];
function question(){
    for(let key in objList){
        questions.push(objList[key]);
    }
    std();
}
function std(){
    if(questions.length){
        process.stdout.write(questions[i] + ' ');
    }
}

process.stdin.on('data',chunk => {
    if(!chunk.toString().replace(/\r\n/g,'')){
        process.stdout.write(questions[i] + ' ');
        return;
    }
    answers.push(chunk.toString().replace(/\r\n/g,''));
    if(answers.length === len) {
        for(let j = 0,l = len; j < l; j++){
            result.push({});
        }
        for(let k = 0; k < result.length; k++){
            result[k][questions[k]] = answers[k];
        }
        console.log(result);
        process.exit();
    }
    i++;
    std();
})
module.exports = {
    promt: function(arr){
        if(Array.isArray(arr)){
            len = arr.length;
            let allObj = arr.every(obj => {
                return Object.prototype.toString.call(obj) === '[object Object]';
            });
            if(allObj){
                objList = Object.assign({},...arr);
                question();
            }
        }else{
            throw  new Error('the first parameter must be a array.')
        }
    }
}