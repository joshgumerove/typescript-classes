// "use strict";
// console.log("ITS WORKING");

class Player {
  static description = "Player in our Game";
  #score = 0; // only usuable inside the player class (private identifier)
  numLives = 10; // note how we do not have to do this inside of the constructor (these are class fields -- must be hard-coded)

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  taunt() {
    console.log("BOOYAH");
  }

  loseLife() {
    this.numLives -= 1;
  }

  get score() {
    return this.#score;
  }

  updateScore(newScore) {
    this.#score = newScore;
  }

  #secret() {
    console.log("SECRET");
  } // private method that must be use within other methods inside the class

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set score(val) {
    if (val < 0) {
      throw new Error("score must be positive");
    }
    this.#score = val;
  }

  static randomPlayer() {
    // return new Player("Andy", "Samberg");
  }
}

const player1 = new Player("blue", "steele");
console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);
console.log(player1.score); // how we could access the score (but can not change score outside of class)
player1.updateScore(50); // would have to update within the class using a method
console.log(player1.score);
console.log(player1.fullName); // treated as a property
player1.score = 500;
console.log(player1.score);

console.log(Player.description); // defined with a static property
console.log(Player.randomPlayer()); // could store value in a variable
// player1.score = -5;
// console.log(player1.score); will now get an error
// player1.#secret();

// const player2 = new Player("josh", "gumerove");
// console.log(player2.lastName);
// player2.taunt();

// note: we do not always need a constructor
// constructor is run everytime a new instance is created

class AdminPlayer extends Player {
  isAdmin = true;
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
}

const admin = new AdminPlayer("Brennan", "Gumerove", "removes users");
console.log(admin);
