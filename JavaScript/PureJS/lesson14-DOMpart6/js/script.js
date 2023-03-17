const modeBtn = document.querySelector('#btn-mode')
const mode = document.querySelector('#mode')

if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode','light');
    
}else{
    modeBtn.onclick=()=>{
        if (modeBtn.innerHTML === 'Dark') {
            mode.className = "dark";
            modeBtn.innerHTML = 'Light';
            localStorage.setItem('mode','dark');
        }else{
            modeBtn.innerHTML = 'Dark';
            mode.className = "light";
            localStorage.setItem('mode','light');

        
        }
    }
}


if (localStorage.getItem('mode') === 'dark') {
    mode.className = "dark";
    modeBtn.innerHTML = 'Light';
    
}else{
    modeBtn.innerHTML = 'Dark';
    mode.className = "light";
}

// mode end

