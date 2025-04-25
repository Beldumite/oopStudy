class Animal {
  makeSound() {
    console.log("Some generic animal sound");
    console.log("dwjialdjaw;ooda");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow! Meow!");
  }
}

class Cow extends Animal {
  makeSound() {
    console.log("Moo! Moo!");
  }
}

class Bird extends Animal {
  makeSound() {}
}

const dog = new Dog();
const cat = new Cat();
const cow = new Cow();
const bird = new Bird();
const animal = new animal();

dog.makeSound(); // Outputs: Woof! Woof!
cat.makeSound(); // Outputs: Meow! Meow!
cow.makeSound(); // Outputs: Moo! Moo!
bird.makeSound();
animal.makeSound();
