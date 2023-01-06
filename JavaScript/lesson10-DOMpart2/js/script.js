// const btn = document.querySelector('button');
// const text = document.querySelector('p');
// const input = document.querySelector('input');

// const actionOne=()=>{
//     text.innerHTML = 'default';
//     input.style.backgroundColor = "grey";
//     input.style.color = 'white'
//     input.style.transition = '1s'
//     input.style.height = '20px';

// }

// const actionTwo=()=>{
//     text.innerHTML = 'pressed';
//     input.style.backgroundColor = "red";
//     input.style.color = 'black';
//     input.style.height = '50px';
//     input.style.transition = '1s'
// }

// input.addEventListener('keyup',actionOne)
// input.addEventListener('keypress',actionTwo);


// btn.addEventListener('click',action);
// btn.addEventListener('dblclick',action);
// btn.addEventListener('mouseenter',action);
// btn.addEventListener('mouseleave',action);
// btn.addEventListener('mouseover',action);
// btn.addEventListener('mouseout',action);
// btn.addEventListener('mousedown',action);
// btn.addEventListener('mousedown',actionTwo);
// btn.addEventListener('mouseup',actionOne);
// input.addEventListener('change',action);



const toggleBtn = document.querySelector('#toggleBtn');
const card = document.querySelector('.card');
const icon = document.querySelector('.fa-solid');

const toggle =()=>{
        if(icon.attributes[0].value === 'fa-solid fa-x'){
        card.attributes[0].value = 'hide';
        icon.attributes[0].value = 'fa-solid fa-bars'}
        else{
        card.attributes[0].value = 'show';
        icon.attributes[0].value = 'fa-solid fa-x'
        }
}

toggleBtn.onclick = toggle;
