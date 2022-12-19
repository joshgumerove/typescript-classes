"use strict";
console.log("ITS WORKING");
class Player {
    constructor(first, last) {
        this.score = 0; // do not need to use but can help provide some more clarity #score in regular js
        this.first = first;
        this.last = last;
        this.sayHi();
    }
    sayHi() {
        console.log("hello world");
    }
}
const elton = new Player("Elton", "John");
console.log(elton);
console.log(elton.score);
// elton.first = "elon"; will get an error because it is readonly
// note the public and private modifiers
// by default everything in a class is considered public
