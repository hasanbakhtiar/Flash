// type prodType = {
//     id:number,
//     title:string,
//     price:number,
//     stock:boolean
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Car = /** @class */ (function () {
    function class_1(model, year, stock) {
        this.imodel = model;
        this.iyear = year;
        this.istock = stock;
    }
    class_1.prototype.calclateSpeed = function (km, hour) {
        return "".concat(this.imodel, ":").concat(km / hour, "km/h");
    };
    return class_1;
}());
var myCar = new Car("BMW", 2022, true);
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(model, year, stock) {
        return _super.call(this, model, year, stock) || this;
    }
    Moto.prototype.testing = function () {
        return this.calclateSpeed(100, 5);
    };
    return Moto;
}(Car));
var myMoto = new Moto("Yamaha", 1990, false);
console.log(myMoto.testing());
console.log(myMoto.testing());
