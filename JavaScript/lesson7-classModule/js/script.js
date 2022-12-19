// ES5
//  function Car(brand,model,year){
//     this.infoBrand = brand;
//     this.infoModel = model;
//     this.infoYear = year;
//  }

//  Car.prototype.color = 'white'

//  const myCar = new Car('bmw','x5',2022);
//  console.log(myCar.color);
//  console.log(Math);

// ES6

import {Car} from './class/Car.js'
import {Moto} from './class/Moto.js'
import * as comingData from './data/carlist.js';

 const myCar = new Car(comingData.carList[0].brand,comingData.carList[0].model,2022);
//  console.log(myCar.color);
for(let x in comingData.carList){

    console.log(myCar.calculateSpeed("Speed",200,3, comingData.carList[x].year));
}

const myMoto = new Moto('Yamaha','s500',2022); 
console.log(myMoto.calculateSpeed("Speed",400,5));