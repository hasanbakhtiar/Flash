// const info = new Promise((resolve,reject)=>{
//         const data = true;
//         if (data) {
//             resolve('this is success')

//         }else{
//             reject("this is error")
//         }
// });

// info
// .then(res=>{console.log(res)})
// .catch(err=>console.log(err))
// .finally(console.log('resquest sending...'))

// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(fd=>console.log(fd))
// .catch(err=>console.log("My err:"+err))

// const ol = document.querySelector('ol');

// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(fd=>{
//     let li  = "";
//     fd.map(item=>{
//         li+=`<li>${item.title}</li>`
//     })
//     ol.innerHTML = li;
// })
// .catch(err=>console.log("My err:"+err))







const row = document.querySelector(".row");
fetch("https://mocki.io/v1/d57fce1d-27a9-4881-8229-4336e30d14ae")
  .then((res) => res.json())
  .then((products) => {
    let col = "";
    // products.splice(1,3).map((item) => {
        products.slice(4,6).map((item) => {
      col += `<div class="col-12 col-sm-6 col-md-4">
        <div class="card" >
  <img height="300" src="${item.photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.price}...</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
        </div>
        </div>`;
    });
    row.innerHTML = col;
  });
