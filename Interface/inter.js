class pokemon {
  constructor(name, move) {
    this.name = name;
    this.move = move;
  }
  attack() {
    throw new Error("attack(), Must be Implemented, whats the attack??");
  } //this is the inheritence-like part. it forces the next class to implement
  //the attack() function
}

class eevee extends pokemon {
  attack() {
    console.log(`${this.name} use ${this.move}`);
  } //if this attack() function did not exist in here
  //when i call attack() it will just throw the error
}
leafeon = new eevee("Leafeon", "Razor Leaf");
leafeon.attack(); //this works becuase the attack() func exist

vaporeon = new eevee("Vaporeon", "Water Gun");
vaporeon.attack();
