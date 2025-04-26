//incapsulation
class Animal {
  #name; //encap

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  speak() {
    console.log(`${this.getName()} makes a noise.`);
  }
}

//inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  //poly
  speak() {
    console.log(`${this.getName()} barks. Woof!`);
  } //override method
}

//Abstraction
class DogTrainer {
  train(dog) {
    console.log("Training started...");
    dog.speak(); //kita ga perlu tahu method speak secara teknis gmn
    console.log("Training completed.");
  }
}

const dog1 = new Dog("Buddy", "Golden Retriever");

const trainer = new DogTrainer();
trainer.train(dog1);
// this is a super rushed code, so im not proud of this one
// but what can you do when you rushed a task? not make a bad product?
