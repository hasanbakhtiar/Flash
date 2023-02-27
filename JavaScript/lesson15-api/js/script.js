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



const ol = document.querySelector('ol');



fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(fd=>{
    let li  = "";
    fd.map(item=>{
        li+=`<li>${item.title}</li>`
    })
    ol.innerHTML = li;
})
.catch(err=>console.log("My err:"+err))