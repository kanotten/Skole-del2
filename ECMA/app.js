// ====================================================
// What is ECMAScript?
// ====================================================
// ECMAScript is the standard specification that defines how JavaScript works.
// ECMAScript 6 (ES6), also known as ECMAScript 2015, is a major update introducing new features to make JavaScript more powerful and easier to use.

// ====================================================
// Key Features of ES6
// ====================================================

// 1. Variables and Constants

// Variables are used to store data that can change.
// Constants are similar but their values cannot be changed once set.

// Variable declaration using `let`
// `let` creates a block-scoped variable (accessible only within the block it's defined).
let age = 25;
age = 26; // You can change the value of `age`

// Variable declaration using `const`
// `const` creates a block-scoped constant (value cannot be changed once set).
const birthYear = 1996;
// birthYear = 1997; // This line will cause an error because you can't change a constant

// ====================================================
// 2. Functions

// Functions are blocks of code designed to perform specific tasks.
// They can be reused multiple times.

// Traditional Function Declaration
function add(a, b) {
  return a + b;
}

// Arrow Functions
// Arrow functions provide a shorter syntax and inherit the `this` context from their surrounding scope.
const add = (a, b) => a + b;

// ====================================================
// 3. Strings

// Strings are sequences of characters used to represent text.

// Template Literals
// Template literals allow for embedded expressions and multi-line strings.
// They are enclosed in backticks (` `), not quotes.
const name = "Alice";
const message = `Hello, ${name}!`; // `${name}` is replaced with the value of the variable `name`

// ====================================================
// 4. Objects

// Objects are collections of key-value pairs, where each key is a property name and each value can be any data type or function.

// Destructuring Assignment
// Destructuring allows you to extract values from objects or arrays into individual variables.
const person = { name: "Alice", age: 30 };
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 30

// ====================================================
// 5. Classes

// Classes are blueprints for creating objects with shared properties and methods.
// They make it easier to create and manage objects.

// Class Declaration
class Person {
  // Constructor method initializes the properties of the class
  constructor(name, age) {
    this.name = name; // `this.name` is a property of the class instance
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Creating an instance of the class
const john = new Person("John", 30);
john.greet(); // Output: Hello, my name is John

// ====================================================
// 6. Modules

// Modules allow you to split your code into separate files for better organization and reusability.
// You can export functions, objects, or variables from one file and import them into another.

// Exporting in module.js
export const pi = 3.14;
export function calculateArea(radius) {
  return pi * radius * radius;
}

// Importing in another file
import { pi, calculateArea } from "./module.js";
console.log(calculateArea(5)); // Output: 78.5

// ====================================================
// 7. Promises

// Promises are used to handle asynchronous operations. They represent a value that might be available now, in the future, or never.

// Creating a promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received"); // The promise is resolved with the value "Data received"
  }, 2000);
});

// Handling the promise
fetchData.then((data) => console.log(data)); // Output after 2 seconds: Data received

// ====================================================
// 8. Symbols

// Symbols are unique identifiers used as property keys to avoid collisions.

// Creating a symbol
const uniqueSymbol = Symbol("description");

// Using symbols as keys in an object
const obj = {
  [uniqueSymbol]: "value",
};
console.log(obj[uniqueSymbol]); // Output: value

// ====================================================
// Summary

// ECMAScript 6 (ES6) introduces several powerful features:
// - Variables with block scope (`let`) and constants (`const`).
// - Arrow functions for concise function syntax.
// - Template literals for easier string manipulation.
// - Destructuring assignment for extracting data from objects and arrays.
// - Classes for creating objects with shared methods.
// - Modules for code organization and reuse.
// - Promises for handling asynchronous operations.
// - Symbols for unique property keys.
