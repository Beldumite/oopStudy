export class battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.turn = "player";
  }

  nextTurn() {
    if (this.turn === "player") {
      this.player.attack(this.enemy);
      this.turn = "enemy";
    } else {
      this.enemy.attack(this.player);
      this.turn = "player";
    }
  }

  isOver() {
    return !this.player.isAlive() || !this.enemy.isAlive();
  }
}
