// static = belongs to the class, not the objects
//               properties: useful for caches, fixed-configuration
//               methods:    useful for utility functions

//Math.pow(23,45);  Example = Math is class and pow is static member function
class Car {

    static numberOfCars = 0;

    constructor(model) {
        this.model = model;
        Car.numberOfCars += 1;
    }
    static checkStatus() {
        console.log("Static method invoked");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Ford");

console.log(Car.numberOfCars);
Car.checkStatus();