class myVault {
  #balance;
  tes = 100;

  constructor(owner, totalbalance) {
    this.owner = owner;
    this.#balance = totalbalance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(
        `Succesfully added ${amount} to you account, Total balance ${
          this.#balance
        }`
      );
    } else {
      alert("amount must not be negative");
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`withdraw ${amount} success, Total balance ${this.#balance}`);
    } else {
      alert("amount must not be negative");
    }
  }
}

const myAccount = new myVault("Azka", 1000);
myAccount.withdraw(100);
myAccount.deposit(1000);
myAccount.tes = 400;
console.log(myAccount.tes);
