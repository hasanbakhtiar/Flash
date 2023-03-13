const btn =document.querySelector('button');
const info = document.querySelector('.info');


let open = true;


function loadDoc() {

    if (open) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
          info.innerHTML = this.responseText;
          }
        xhttp.open("GET", "../data/userinfo.txt", true);
        xhttp.send();
        open = false;
    }else{
        info.innerHTML = "Morgan"
        open = true;
    }
   
  }
btn.onclick = loadDoc;