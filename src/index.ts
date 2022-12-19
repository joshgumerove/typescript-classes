console.log("ITS WORKING");

class Player {
  readonly first: string;
  readonly last: string;
  score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const elton = new Player("Elton", "John");
console.log(elton);
console.log(elton.score);

// elton.first = "elon"; will get an error because it is readonly
