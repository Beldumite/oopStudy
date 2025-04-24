class car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  startEngine() {
    return console.log(`${this.name} ${this.brand} Engine started`);
  }

  stopEngine() {
    return console.log(`${this.name} ${this.brand} Engine stopped`);
  }
}

const avansa = new car("Avanza", "Toyota");
avansa.startEngine();
avansa.stopEngine();
