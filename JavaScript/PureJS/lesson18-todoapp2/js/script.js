const form = document.querySelector('form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

const todoApp = e=>{
    e.preventDefault();
   if (!todoInput.value) {
        alert('fill input ')
   }else{
    const li  = document.createElement('li');
    li.innerHTML = `<span>${todoInput.value}</span><button id="del" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>`
    li.setAttribute('class','list-group-item list-group-item-action d-flex justify-content-between my-2');
    todoList.appendChild(li);
    todoInput.value = "";

    let list = document.querySelectorAll('li');

    for (let i = 0; i < list.length; i++) {
            document.querySelectorAll('#del')[i].onclick = ()=>{
                list[i].remove();
            }
    }
   }
    
}
form.onsubmit = todoApp;


// Clear All
const clrAll = document.querySelector('#clr-all');

clrAll.onclick = ()=>{
    let list = document.querySelectorAll('li');
    for (let i = 0; i < list.length; i++) {
        list[i].remove();
    }
}