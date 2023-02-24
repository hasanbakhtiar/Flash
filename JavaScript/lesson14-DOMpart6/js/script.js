const modeBtn = document.querySelector('#btn-mode')
const mode = document.querySelector('#mode')

modeBtn.onclick=()=>{
    if (modeBtn.innerHTML === 'Dark') {
        mode.className = "dark";
        modeBtn.innerHTML = 'Light';
    }else{
        modeBtn.innerHTML = 'Dark';
        mode.className = "light";
    
    }
}
