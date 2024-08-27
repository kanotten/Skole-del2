/* Object-oriented programming (OOP) in JavaScript is a programming paradigm
   that uses objects and classes to structure code.
   Although JavaScript is not a class-based language like Java or C++,
   it still supports OOP concepts using prototypes and, more recently, ES6 classes. */

// Key concepts

// Object Literal
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is John

/* Classes: Introduced in ES6, classes are a syntactical sugar over JavaScript’s existing prototype-based inheritance.
   They make it easier to write and manage OOP code. */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John", 30);
john.greet(); // Output: Hello, my name is John

/* Inheritance:
   Inheritance allows a class to inherit properties and methods from another class.
   This promotes code reuse. */

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  describe() {
    console.log(`${this.name} is a ${this.jobTitle}`);
  }
}

const jane = new Employee("Jane", 28, "Software Engineer");
jane.greet(); // Output: Hello, my name is Jane
jane.describe(); // Output: Jane is a Software Engineer

/* Encapsulation:
   Encapsulation involves bundling the data (properties) and methods (functions)
   that operate on the data into a single unit, and restricting access to some of the object's components. */

class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Output: 150

/* Polymorphism:
   Polymorphism allows methods to do different things based on the object it is acting upon.
   In JavaScript, this can be achieved using method overriding. */

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const animal = new Animal();
const dog = new Dog();

animal.speak(); // Output: Animal speaks
dog.speak(); // Output: Dog barks

/* Abstraction:
   Abstraction is the concept of hiding the complex implementation details
   and showing only the essential features of an object. */

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }

  // Complex internal logic can be abstracted away
  #internalCombustionEngine() {
    console.log("Engine is running...");
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.start(); // Output: Toyota Corolla is starting...

/* Prototypes and Prototype Inheritance
   Before classes were introduced in ES6, JavaScript used prototypes for inheritance.
   Every object in JavaScript has a prototype from which it can inherit methods and properties. */

function PersonProto(name, age) {
  this.name = name;
  this.age = age;
}

PersonProto.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const johnProto = new PersonProto("John", 30);
johnProto.greet(); // Output: Hello, my name is John
