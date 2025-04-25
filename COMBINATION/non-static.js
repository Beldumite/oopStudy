// //this system is heavily inspire by the pc storage system use in pokemon games
// //if you play some of em, you know what im talking abaut
// //and before you ask, yes im a pokemon fan.

// bag = [];

// class pc {
//   static #pokemon = [];
//   // constructor() {
//   //   this.#pokemon = [];
//   // }

//   static deposit(pokemon) {
//     this.#pokemon.push(pokemon);
//     console.log(`${pokemon.name} has been succesfully deposited`);
//   }

//   static withdraw(name) {
//     const result = this.#pokemon.find((poke) => {
//       console.log(poke.name);
//       poke.name === name.name;
//       return poke;
//     });
//     if (result) {
//     } else {
//       return console.log(`${name.name} not found in storage`);
//     }
//   }

//   release() {}

//   static getInfo() {
//     const info = [];
//     this.#pokemon.forEach((poke) => {
//       info.push(poke.name);
//     });
//     return console.log(info);
//   }
//   //abstraction
// }

// class pokemon {
//   // #name;
//   // #level;
//   // #type;
//   //encapsulation
//   constructor(name, type, level) {
//     this.name = name;
//     this.type = type;
//     this.level = level;
//   }

//   getInfo() {
//     return `Name: ${this.name}, Type: ${this.type}, Level: ${this.level}`;
//   }
// }
// class shinyPokemon extends pokemon {
//   //inheritence
//   getInfo() {
//     return `${super.getInfo()}, Its Shiny ✨✨✨✨✨✨`;
//     //polymorphism
//   }
// }

// const leafeon = new pokemon("Leafeon", "Grass", "21");
// const vaporeon = new shinyPokemon("Vaporeon", "Water", "22");
// //const pc = new pc();
// pc.deposit(leafeon);
// pc.deposit(vaporeon);
// pc.withdraw(leafeon);
// // leafeon.getInfo();

// //havent finished it

const arr = [{ name: "leafeon" }, { name: "vaporeon" }];
const result = arr.findIndex((p) => {
  return p.name == "leafeon";
});
arr.splice(result, 1);
console.log(arr);
