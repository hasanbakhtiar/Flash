// login start

const userInfo = {
    email:"info@exmaple.com",
    pass:"info123",
}

const emailInput = document.querySelectorAll('input')[0];
const passInput = document.querySelectorAll('input')[1];
const form  = document.querySelector('form');


form.onsubmit =(e)=>{
    e.preventDefault();
   
  if (!emailInput.value || !passInput.value) {
    alert('fill input')
  }else{
    if (emailInput.value === userInfo.email && passInput.value === userInfo.pass) {
        alert('login success');
        window.location.assign('http://127.0.0.1:5500/index.html');
    }else{
        alert('wrong')

    }
  }
    
    
}




