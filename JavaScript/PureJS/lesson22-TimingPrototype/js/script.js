
// function Car(brand,model,year){
//     this.ibrand = brand;
//     this.imodel = model;
//     this.iyear = year;
// }

// Car.prototype.color = "Blue";


// const myCar = new Car("BMW","X5",2022);
// console.log(myCar);

// const myData = new Car("Hello",'Mello',1);


// console.log(myCar.color);


// class Car{
//     constructor(brand,model,year){
//         this.ibrand = brand;
//         this.imodel = model;
//         this.iyear = year;
//     }
//     calculateSpeed(km,hour){
//         return `Speed->${this.ibrand}: ${(km/hour).toFixed()}km/h`
//     }
// }


// class Moto extends Car{
//     constructor(brand,model,year){
//       super(brand,model,year);
//     }
  
// }


// const myCar = new Car("BMW","X5",2022);
// const myMoto = new Moto("Yamaha","S500",2002);

// console.log(myMoto.calculateSpeed(500,4));




// setTimeout -> mueyyen bir zamandan sonra  funksiyani 1 defe ise salir
// setInterval -> mueyyen bir zamandan funksiyani  ise salir araligindan   (sonsuz) 

// 1000ms  = 1s 

// setTimeout(()=>{
//     document.write("hello")
// },2000);


// setInterval(()=>{
//     document.write("hello<br>")
// },2000);

const main  = document.querySelector('main');
const loading = document.querySelector('h3');

setTimeout(()=>{
    main.style.display = 'block';
    loading.style.display = 'none'
},2000)


setInterval(()=>{
    document.querySelector('p').innerHTML  = new Date();
},1000);