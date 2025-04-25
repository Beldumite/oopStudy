//this system is heavily inspire by the pc storage system use in pokemon games
//if you play some of em, you know what im talking abaut
//and before you ask, yes im a pokemon fan.

class pc {
  static #pokemon = [];
  //encapsulation

  static deposit(pokemon) {
    this.#pokemon.push(pokemon);
    console.log(`${pokemon.name} has been succesfully deposited`);
  }

  static #findPokemonIndex(name) {
    return this.#pokemon.findIndex((p) => {
      return p.name === name.name;
    });
  }

  static withdraw(name) {
    const index = this.#findPokemonIndex(name);
    if (index >= 0) {
      this.#pokemon.splice(index, 1);
      return console.log(`${name.name} has been successfully withdrawed`);
    } else {
      return console.log(`${name.name} not found in storage`);
    }
  }

  static release(name) {
    const index = this.#findPokemonIndex(name);
    if (index >= 0) {
      console.log(this.#pokemon[index]);
      delete this.#pokemon[index];
      return console.log(
        `${name.name} has been released into the wild, bye ${name.name}`
      );
    } else {
      console.log(
        `${name.name} not found in storage and thus cannot be released`
      );
    }
  } //this method is literally a joke, i mean JS doesnt even allowed us to delete an instance of a class
  //automatically so we need to do it manually, but please just act as if the pokemon has already been released
  // and cannot be called anymore, even tho you can :>

  static getInfo() {
    const info = [];
    this.#pokemon.forEach((poke) => {
      info.push(poke.name);
    });
    return console.log(info);
  }
  //abstraction
}

class pokemon {
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
  //and yes if you ask this class is like, useless. i know
  //im doing this just so that inheritence and polymorphism exist :v
}

let leafeon = new pokemon("Leafeon", "Grass", "21");
let vaporeon = new shinyPokemon("Vaporeon", "Water", "22");
pc.deposit(leafeon);
pc.deposit(vaporeon);
pc.getInfo();
pc.withdraw(leafeon);
pc.getInfo(); //Leafeon was not on the pc anymore

// i dont know if you realized it but im using only english for the comment
//and if your asking why am i using english? well i like it, yeah its feel more natural
// and skill issue if you can't understand it :> JK XD
