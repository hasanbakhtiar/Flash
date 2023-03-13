
const text =document.querySelector('.my-text');
const btn = document.querySelector('button');

const infoLoad = () =>{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        text.innerHTML = this.responseText;
        }
        xhttp.open("GET", "../data/information.txt", true);
        xhttp.send();
}

btn.onclick = infoLoad;