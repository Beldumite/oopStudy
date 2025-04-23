class person {
  #identitas;

  constructor(realname, username) {
    this.#identitas = realname;
    this.username = username;
  }

  revealName() {
    console.log(this.#identitas);
  }
}

xenon = new person("John doe", "Xenon");
console.log(xenon.username);
//console.log(xenon.realname) -> ini akan menyebabkan syntax error
xenon.revealName(); //baru bisa
