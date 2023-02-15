class Car{
    constructor(carName, model, year){
        this.carName=carName;
        this.model=model;
        this.year=year;

    }

    carAge(){ //function
        let date=new Date(); //comes from JS
        return date.getFullYear()-this.year
    }

}

var myCar=new Car("Kia","Sportage", 2012);
console.log(myCar.carName, myCar.model)
console.log("Car age is", myCar.carAge())

