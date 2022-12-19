"use strict";
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
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this._score = 0; // do not need to use but can help provide some more clarity #score in regular js
        // alternative shorthand syntax
        this.sayHi();
    }
    sayHi() {
        console.log("hello world");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Error: Cannot be less than zero");
        }
        this._score = newScore;
    }
}
// protected methods
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
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
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("blue", "burberry");
