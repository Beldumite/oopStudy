class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  move() {
    console.log(`${this.brand} is moving at ${this.speed} km/h.`);
  }
}

class Car extends Vehicle {
  constructor(brand, speed, fuel) {
    super(brand, speed); // Manggil parentnya
    this.fuel = fuel;
  }

  refuel(amount) {
    console.log(
      `${this.brand} refueled with ${amount} liters of ${this.fuel}.`
    );
  }
}

const myCar = new Car("Toyota", 120, "Gasoline");

myCar.move(); // ✅ Di inherit dari vehicle -> "Toyota is moving at 120 km/h."
myCar.refuel(50); // ✅ Unik dalam Car -> "Toyota refueled with 50 liters of Gasoline."
