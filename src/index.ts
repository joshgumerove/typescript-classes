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
// elton.score = -23;
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

class Jacket implements Colorful, Printable {
  constructor(public color: string, public brand: string) {}
  print(): void {
    console.log("printing");
  }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("blue", "burberry");

interface Printable {
  print(): void;
}

// abastract classes -- exclusive to typescript

abstract class Employee {
  constructor(public first: string, public last: string) {}

  abstract getPay(): number;

  greet(): void {
    console.log("Hello Comrade");
  } // could not have this in an interface (has more functionality/can be viewed as a hybrid)
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  } // must have these methods due to the rule set-up in the abstract class
}

// const cat1 = new Employee(); // cannot create instance on own of cat because is abstract class

const employee1 = new FullTimeEmployee("Josh", "Gumerove", 80000);
console.log(employee1.getPay());
console.log(employee1.greet());

const employee2 = new PartTimeEmployee("Brennan", "Gumerove", 300, 5000);
console.log(employee2.getPay());
console.log(employee2.greet());
