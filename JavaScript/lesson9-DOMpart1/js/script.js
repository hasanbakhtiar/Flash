// Selectors
// document.getElementsByTagName('h1')[0].innerHTML = "<i>new value</i>";
// document.getElementsByTagName('h1')[0].innerText = "<i>new value</i>";

// document.getElementById('data').innerHTML = 'new value';
// document.getElementsByClassName('data')[0].innerHTML = 'new value';

// QuerySelectors
// document.querySelector('.data').innerHTML = "new value"
// document.querySelectorAll('.data')[2].innerHTML = "new value"

// for(let x=0;x<4;x++){
// document.querySelectorAll('.data')[x].innerHTML = "new value"
// }




// const capital = ()=>{
//     if (document.querySelector('h1').innerHTML === "England") {
//         document.querySelector('h1').innerHTML = "London";
//     }else{
//         document.querySelector('h1').innerHTML = "England";
//     }
// }

// document.querySelector('button').addEventListener('click',capital,true);
import { langdata } from "../data/langData.js";

const btn = document.querySelector('#langBtn');
const langItem = document.querySelectorAll('.nav-link')

const multiLang =()=>{
    if (btn.innerHTML === "AZ") {
        for (let i in langdata.az) {
            langItem[i].innerHTML = langdata.az[i];
        }
        btn.innerHTML = 'EN'
    }else{
        for (let i in langdata.en) {
            langItem[i].innerHTML = langdata.en[i];
        }
        btn.innerHTML = 'AZ'
    }
}

btn.addEventListener('click',multiLang)