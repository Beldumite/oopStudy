class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    this.#checkEngine();
    console.log(`${this.make} ${this.model} engine started.`);
  }

  drive() {
    console.log(`${this.make} ${this.model} is driving.`);
  }

  #checkEngine() {
    console.log("Check engine...");
  }
}

const myCar = new Car("Toyota", "Innova", 2024);
myCar.startEngine();
myCar.drive();
// myCar.#checkEngine(); //--> SyntaxError: Private field
// '#checkEngine' must be declared in an enclosing class
