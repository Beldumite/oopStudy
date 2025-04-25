// so this is like a fantasy battle theme, like a turn based style.
//its just 1000x times worse and more terrible, i dont want to do a poke sim battle
// its to complex with all the type effectiveness and such. i can bumb it down into just
// well this, but it feels wrong to do pokemon like that, so lets do mage and knight

import { player, enemy } from "./player.js";
import { battle } from "./battlemanager.js";
//package

const greatKing = new player("Glorius King The Third", 100, 80, 23, 27);
const foe = new enemy("Not Kind Monster", 100, 70, 20, 25);

const currentBattle = new battle(greatKing, foe);

console.log("🔥 Battle Start!");

while (!currentBattle.isOver()) {
  currentBattle.nextTurn();
}
//simple alg for the play loop

console.log("🏁 Battle Ended!");

//and if your wondering why is the code quality worse, well this is rushed
//of course its rushed, this code is bullshit. if not i should have used
// composition and added classes like mage or knight and even paladin
// and maybe even input, cause why not
