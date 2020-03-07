
let add = document.getElementsByClassName('add')[0];
add.addEventListener('click', () => {
    let el = document.createElement('div');
    el.innerText = '按钮添加的内容';
    document.body.appendChild(el);
})
