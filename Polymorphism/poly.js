class Animal {
  makeSound() {
    console.log("Some generic animal sound");
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

const dog = new Dog();
const cat = new Cat();
const cow = new Cow();

dog.makeSound(); // Outputs: Woof! Woof!
cat.makeSound(); // Outputs: Meow! Meow!
cow.makeSound(); // Outputs: Moo! Moo!
