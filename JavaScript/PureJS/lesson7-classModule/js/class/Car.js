class Car {
    constructor(brand, model, year) {
        this.infoBrand = brand;
        this.infoModel = model;
        this.infoYear = year;
    }
    calculateSpeed(info,km,hour,comingYear){
            const total = km/hour
            return `${this.infoBrand+this.infoModel} ${info} is:${total.toFixed(1)}km/h. Year is ${comingYear}`
    }
}
Car.prototype.color = 'white';

export {Car}