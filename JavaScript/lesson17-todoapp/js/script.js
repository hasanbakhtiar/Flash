const input = document.querySelector('input');
const btn = document.querySelector('button');
const ol = document.querySelector('ol');

let count = 0;
const todoApp =()=>{
    if (!input.value) {
        alert('please,fill input ')
    }else{
        const li = document.createElement('li');
        li.innerHTML = input.value;
        ol.appendChild(li);
        input.value = "";
        li.onclick=()=>{
           if (li.style.textDecoration === 'none') {
            li.style.textDecoration = 'line-through'
           }else{
            li.style.textDecoration = 'none'
           }
        }
        li.ondblclick = ()=>{
            li.remove();
            count -=1;
            document.querySelector('p').innerHTML = count;
        }
       
    }
    count +=1;
document.querySelector('p').innerHTML = count;

}
document.querySelector('p').innerHTML = count;
document.querySelector('#allclear').onclick =()=>{
        ol.remove();
        document.querySelector('p').innerHTML = 0;
}

btn.onclick = todoApp;

btn.accessKey = "w"



