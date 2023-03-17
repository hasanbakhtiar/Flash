// function name(params){
//     codes
// }
// Not a Number  = NaN
// function calculateSpeed(title="Ferrari",km=400,hour=2){
//     return "Car name:"+title+" "+(km/hour)+"km/h";
// }



// console.log(calculateSpeed("BMW X5",400,4));
// console.log(calculateSpeed("Audi",400,9));


// function(){}
// arrow funtion
// ()=>{}

// const infoFunc =(product,price)=>{
//     console.log(product + "->"+ (price+10)+"$");
// };
// infoFunc("Laptop",300);

// (function(title){
//     console.log('title is:'+title);
// })('data')


// const funcOne =(comingData)=>{
//     return comingData
// }

// const funcTwo =(numbOne,numbTwo)=>{
//     let total = numbOne + numbTwo;
//     console.log(funcOne(total));
// }
// funcTwo(5,10);

const Car={
    brand:"BMW",
    model:"X5",
    color:"white",
    doorType:4,
    year:2020,
    newCar:false,
    speed:(km,hour)=>{
        const carStatus = Car.newCar ? "This car is new" : "This car is old";
        return `Car name:${Car.brand+Car.model} speed is ${Math.round(km/hour)} km/h.${carStatus}`
    }
}
console.log(Car.speed(500,7));

// const  info = Math.round(10.5);
// console.log(info);