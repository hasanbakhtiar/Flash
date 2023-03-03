const btn = document.querySelectorAll('button');
const row = document.querySelector('.row');
let startCount = 0;
let endCount = 50;


const fetchApi = (start,end)=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>{
        let card = "";
        data.slice(start,end).map((item,i)=>{
            card+= ` <div class="col-12 col-sm-6 col-md-4">
            <div class="card" >
               <img src="${item.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                <h4>${start+i+1} </h4>
                  <h5 class="card-title">${item.name.common}</h5>
                  <p class="card-text">${item.capital}</p>
                </div>
              </div>
        </div>`
        })
        row.innerHTML = card;
    })
}
btn[0].onclick =()=>{
    let startCount = 0;
    let endCount = 50;
fetchApi(startCount,endCount);

}

btn[1].onclick =()=>{
    let startCount = 50;
    let endCount = 100;
fetchApi(startCount,endCount);

}

btn[2].onclick =()=>{
    let startCount = 100;
    let endCount = 150;
fetchApi(startCount,endCount);

}

btn[3].onclick =()=>{
    let startCount = 150;
    let endCount = 200;
fetchApi(startCount,endCount);

}
btn[4].onclick =()=>{
    let startCount = 200;
    let endCount = 250;
fetchApi(startCount,endCount);

}
fetchApi(startCount,endCount);