console.log("ITS WORKING");

class Player {
  public readonly first: string;
  public readonly last: string;
  public score: number = 0; // do not need to use but can help provide some more clarity #score in regular js

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this.sayHi();
  }

  private sayHi() {
    console.log("hello world");
  }
}

const elton = new Player("Elton", "John");
console.log(elton);
console.log(elton.score);

// elton.sayyHi();

// elton.first = "elon"; will get an error because it is readonly
// note the public and private modifiers
// by default everything in a class is considered public
