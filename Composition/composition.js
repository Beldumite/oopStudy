const canWalk = (stats) => ({
  walk: () => {
    console.log(`${stats.name} Is walking`);
  },
});

const canHeal = (stats) => ({
  heal: () => {
    stats.hp += 10;
    console.log(
      `${stats.name} HP has increased from ${stats.hp - 10} to ${stats.hp}`
    );
  },
});

const canUseAMove = (stats) => ({
  use: (move) => {
    console.log(`${stats.name} Use the move ${move}`);
    stats.pp--;
    console.log(`${stats.name} has ${stats.pp} pp left`);
  },
});

const trainer = (name) => {
  let stats = {
    name,
    hp: 90,
  };
  return Object.assign(stats, canWalk(stats), canHeal(stats));
  //assign heal and walk ke object trainer
};

const pokemon = (name) => {
  let stats = {
    name,
    hp: 80,
    pp: 10, //PP itu singkatan dari power points kayak berapa kali
    //  suatu pokemon bisa pake satu move
  };
  return Object.assign(
    stats,
    canHeal(stats),
    canUseAMove(stats),
    canWalk(stats)
  );
};

ash = trainer("Ash"); //Buat object trainer baru
ash.walk();

pikachu = pokemon("Pikachu"); //buat object pokemon baru
console.log(pikachu.pp);
pikachu.use("Thunder");
pikachu.heal();
