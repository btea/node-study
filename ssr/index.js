let add = document.getElementsByClassName('add')[0];
add.onclick = function(){
    let el = document.createElement('div');
    el.innerText = '这是新添加的标签';
    document.body.appendChild(el);
}