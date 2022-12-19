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
}
const elton = new Player("Elton", "John");
console.log(elton);
console.log(elton.score);
console.log(elton.fullName);
// elton.sayyHi(); will not compile
// elton.first = "elon"; will get an error because it is readonly
// note the public and private modifiers
// by default everything in a class is considered public
