// type prodType = {
//     id:number,
//     title:string,
//     price:number,
//     stock:boolean
// }

// var product:prodType = {
//     id:1,
//     title:'Samsung s23',
//     price:2300,
//     stock:true
// }

// var data:number = 5;


// var checkdata = (value:number,addcount:number):void=>{
//      data = value+addcount;
// }

// checkdata(20,30)


// console.log(data);



var Car = class {

    public imodel:string;
    public iyear:number;
    public istock:boolean;

    constructor(model:string,year:number,stock:boolean){
            this.imodel = model;
            this.iyear = year;
            this.istock = stock;
    }

   protected calclateSpeed(km:number,hour:number){
            return `${this.imodel}:${km/hour}km/h`
    }

    

}

var myCar = new Car("BMW",2022,true);

class Moto extends Car{
    constructor(model:string,year:number,stock:boolean){
        super(model,year,stock);
    }

    testing(){
        return  this.calclateSpeed(100,5);
    }
    
}

var myMoto = new Moto("Yamaha",1990,false);
console.log(myMoto.testing());
console.log(myMoto.testing());




















