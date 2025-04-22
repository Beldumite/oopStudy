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

function addClass(name, age, score) {
  const x = new StudentScores(name, age, score);
  student.push(x);
}

addClass("azka", 16, 100);
addClass("ravalino", 17, 100);
console.log(student);
console.log(student[0].getName(), student[0].getScore());
console.log(student[1].getName(), student[1].getScore());
