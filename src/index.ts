console.log("ITS WORKING");

// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   public score: number = 0; // do not need to use but can help provide some more clarity #score in regular js

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     this.sayHi();
//   }

//   private sayHi() {
//     console.log("hello world");
//   }
// }

class Player {
  protected _score: number = 0; // do not need to use but can help provide some more clarity #score in regular js

  constructor(public first: string, public last: string) {
    // alternative shorthand syntax
    this.sayHi();
  }

  private sayHi() {
    console.log("hello world");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Error: Cannot be less than zero");
    }
    this._score = newScore;
  }
}

// protected methods
class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999; // note if this was private instead of protected would not be able to access
  }
}

const elton = new Player("Elton", "John");
console.log(elton);
console.log(elton.score);
console.log(elton.fullName);
elton.score = -23;
console.log(elton.score);

// elton.sayyHi(); will not compile

// elton.first = "elon"; will get an error because it is readonly
// note the public and private modifiers
// by default everything in a class is considered public

interface Colorful {
  color: string;
} // can also describe a class

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful {
  constructor(public color: string, public brand: string) {}
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("blue", "burberry");
