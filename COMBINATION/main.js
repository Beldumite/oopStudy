//this system is heavily inspire by the pc storage system use in pokemon games
//if you play some of em, you know what im talking abaut
//and before you ask, yes im a pokemon fan.

bag = [];

class pc {
  #pokemon;
  constructor() {
    this.#pokemon = [];
  }

  deposit(poke) {}

  withdraw() {}

  release() {}
  //abstraction
}

class pokemon {
  // #name;
  // #level;
  // #type;
  //encapsulation
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  getInfo() {
    return `Name: ${this.name}, Type: ${this.type}, Level: ${this.level}`;
  }
}
class shinyPokemon extends pokemon {
  //inheritence
  getInfo() {
    return `${super.getInfo()}, Its Shiny ✨✨✨✨✨✨`;
    //polymorphism
  }
}

leafeon = new pokemon("Leafeon", "Grass", "21");
console.log(leafeon.getInfo());
vaporeon = new shinyPokemon("Vaporeon", "Water", "22");
console.log(vaporeon.getInfo());
console.log(leafeon);
