student = [];

class StudentScores {
  static count = 0;
  #name;
  #age;
  #score;
  constructor(name, age, score) {
    this.setName(name);
    this.setAge(age);
    this.setScore(score);
    StudentScores.count++;
  }

  setName(value) {
    this.#name = value.toUpperCase();
    return "Name has ben successfully changed to " + value.toUpperCase();
  }

  setAge(value) {
    this.#age = value;
    return "Age has ben successfully changed to " + value;
  }

  setScore(value) {
    this.#score = value;
    return "Score has ben successfully changed to " + value;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  getScore() {
    return this.#score;
  }

  static getCount() {
    return score.count;
  }
}

function addClass() {
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const score = document.querySelector("#score").value;

  student.push(new StudentScores(name, age, score));
  console.log(student);
}
