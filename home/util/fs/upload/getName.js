module.exports =  function getName(params, type){
    let t, n;
    if(type){
        t = type.split('/')[1];
    }
    if(Array.isArray(params)){
        params.forEach(p => {
            if(p.includes('filename')){
                n = p.split('=')[1];   
            }
        })
    }
    return './' + (n || (new Date().getTime() + '.' + t));
}