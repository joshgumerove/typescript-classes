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
  public score: number = 0; // do not need to use but can help provide some more clarity #score in regular js

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
}

const elton = new Player("Elton", "John");
console.log(elton);
console.log(elton.score);
console.log(elton.fullName);

// elton.sayyHi(); will not compile

// elton.first = "elon"; will get an error because it is readonly
// note the public and private modifiers
// by default everything in a class is considered public
