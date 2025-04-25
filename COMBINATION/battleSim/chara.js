export class character {
  #name;
  #hp;
  #level;
  #attackstats;
  #defstats;
  //access modifier
  constructor(name, hp, level, attackstats, defstats) {
    this.#name = name;
    this.#hp = hp;
    this.#level = level;
    this.#attackstats = attackstats;
    this.#defstats = defstats;
  }

  attack() {
    throw new Error("Must override this func on the child");
  }
  //interface, i know its fake but lets just act its not

  takeDamage(amount) {
    this.#hp -= amount;
    console.log(`${this.getName()} has ${this.#hp} HP left.`);
  }

  isAlive() {
    return this.#hp > 0;
  }

  getName() {
    return this.#name;
  }

  getHP() {
    return console.log(`${this.#name} has ${this.#hp} left`);
  }

  getDefense() {
    return this.#defstats;
  }

  getAttack() {
    return this.#attackstats;
  }

  getLevel() {
    return this.#level;
  }
}
