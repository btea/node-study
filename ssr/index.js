<<<<<<< HEAD
console.log(1);

document.writeln('4564648949');

let add = document.getElementsByClassName('add')[0];
add.addEventListener('click', () => {
    let el = document.createElement('div');
    el.innerText = '按钮添加的内容';
    document.body.appendChild(el);
})
=======
let add = document.getElementsByClassName('add')[0];
add.onclick = function(){
    let el = document.createElement('div');
    el.innerText = '这是新添加的标签';
    document.body.appendChild(el);
}
>>>>>>> 60f0a712e71d9e7a2eca2aef0def228a495c0d2e
