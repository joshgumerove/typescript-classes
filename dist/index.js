"use strict";
console.log("ITS WORKING");
var Player = /** @class */ (function () {
    function Player(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    return Player;
}());
var elton = new Player("Elton", "John");
console.log(elton);
console.log(elton.score);
// elton.first = "elon"; will get an error because it is readonly
