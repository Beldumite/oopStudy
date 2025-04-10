// class is essentially a blueprint for object
class laptop {
  // object orienet programming oop
  static count = 0;
  constructor(brand, model, cpu, gpu, ram, rom) {
    this.brand = brand;
    // brand : "Asus"
    this.model = model;
    this.cpu = cpu;
    this.gpu = gpu;
    this.ram = ram;
    this.rom = rom;

    laptop.count++;
  }

  run() {
    console.log("The laptop is running");
  }
  static getCount() {
    return laptop.count;
  }
}

let axioo = new laptop(
  "Axioo",
  "Hype 5 Amd X6",
  "Ryzen 5 6600h",
  "Radeon 660M",
  16,
  512
);

let asus = new laptop(
  "Asus",
  "Rog",
  "I90 99999h",
  "Arch 90000BattleMage",
  200,
  1024
);

let Lenovo = new laptop("Lenovo", "LOQ", "celeron", "");

console.log(axioo.brand);
console.log(axioo.cpu);
console.log(asus.brand);
console.log(asus.cpu);
