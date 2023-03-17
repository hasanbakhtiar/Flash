const text = document.querySelector('p');
const ul = document.querySelector('ul');


// text.innerHTML = ul.lastChild.previousSibling.parentElement.firstChild.firstChild.nodeValue

// const h4 = document.createElement('h4');
// const mytext = document.createTextNode('new value');
// h4.appendChild(mytext);
// document.body.appendChild(h4);

const emailInDataBase = 'info@examaple.com'

const input  = document.querySelector('input');
const checkbtn = document.querySelector('button');
const alerttext = document.querySelector('#alert');

checkbtn.onclick=()=>{
    if (!input.value) {
        alerttext.innerHTML = 'please, fill out this input'
        alerttext.className = 'alert alert-warning'
    }else{
        if (input.value === emailInDataBase) {
            alerttext.innerHTML = 'send code ur email'
        alerttext.className = 'alert alert-success'

        }else{
            alerttext.innerHTML = 'email is wrong!'
        alerttext.className = 'alert alert-danger'

        }
    }
}

