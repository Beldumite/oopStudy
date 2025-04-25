import { character } from "./chara.js";
//package

function calculatedmg(atk, def, lvl) {
  const random = Math.random() * 0.15 + 0.85;

  const rawDamage = (((2 * lvl) / 5 + 2) * atk) / def / 2;
  const dmg = Math.floor(rawDamage * random);
  return dmg;
}

export class player extends character {
  attack(target) {
    const atk = this.getAttack();
    const def = target.getDefense();
    const lvl = this.getLevel();

    const dmg = calculatedmg(atk, def, lvl);
    console.log(
      `${this.getName()} attacks ${target.getName()} for ${dmg} damage`
    );
    target.takeDamage(dmg);
  }
}

export class enemy extends character {
  attack(target) {
    const atk = this.getAttack();
    const def = target.getDefense();
    const lvl = this.getLevel();

    const dmg = calculatedmg(atk, def, lvl);
    console.log(
      `${this.getName()} attacks ${target.getName()} for ${dmg} damage`
    );
    target.takeDamage(dmg);
  }
}
