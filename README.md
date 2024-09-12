# Project Documentation: skole-del2

Welcome to the `skole-del2`
notes on code made in class for lvl 2 front end development

## 1. Introduction

Overview
This README provides a comprehensive guide to various JavaScript and TypeScript concepts,
including asynchronous operations, data types, ECMAScript features, error handling, examples,
Object-Oriented Programming (OOP), Regular Expressions (RegEx), and TypeScript.
It includes explanations and code examples to help you understand and apply these concepts effectively.

1. **Asynchronous Programming (Async/Await)**
2. **ECMAScript 6 (ES6)**
3. **Error Handling**
4. **Examples**
5. **Object-Oriented Programming (OOP)**
6. **Regex**
7. **Typescript**

## 1. Asynchronous Programming
1.1 Callbacks
Callbacks are functions passed as arguments to other functions, executed after the completion of an asynchronous operation.

```javascript

function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((message) => console.log(message)); // Output: Data fetched
```

## 1.2 Promises
Promises represent the result of an asynchronous operation,
which can be either resolved or rejected.

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData.then(message => console.log(message)); // Output: Data fetched
```

## 1.3 Async/Await
Async/await syntax simplifies working with promises,
making asynchronous code look synchronous.

```javascript

async function fetchData() {
  return "Data fetched";
}

fetchData().then(message => console.log(message)); // Output: Data fetched
```

## 2. Data Types
2.1 Primitive Data Types
JavaScript includes primitive types like number, string, boolean, and undefined.

```javascript

let age: number = 30;
let name: string = "Alice";
let isStudent: boolean = true;
```

2.2 Complex Data Types
Complex types include arrays and objects.

```javascript

let numbers: number[] = [1, 2, 3];
let person: { name: string, age: number } = { name: "Bob", age: 25 };
```

## 3. ECMAScript Features
3.1 ES6+ Features
ES6 introduced classes, template literals, and arrow functions.

```javascript

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
const greet = (name) => `Hello, ${name}`;
```

3.2 Modern JavaScript
ES7 and beyond added features like async/await and optional chaining.

```javascript

async function fetchData() {
  return "Data fetched";
}
const data = await fetchData();
```

## 4. Error Handling
4.1 try...catch
Handles synchronous errors by wrapping code in a try block and catching errors in the catch block.

```javascript

try {
  let result = riskyFunction();
} catch (error) {
  console.error("An error occurred:", error.message);
}
```

4.2 Promises and Async/Await
Promises and async/await provide error handling for asynchronous operations.

```javascript

fetchData().catch(error => console.error("Error:", error));

async function fetchData() {
  try {
    let data = await someAsyncOperation();
  } catch (error) {
    console.error("Error:", error);
  }
}
```


## 5. Examples
This section contains a visual page for the queue system,
demonstrating how the queue works with HTML, CSS, and JavaScript.

## 6. Object-Oriented Programming (OOP)
6.1 Classes and Inheritance
Classes in JavaScript provide a syntactical sugar over prototype-based inheritance.

```javascript

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
```

6.2 Encapsulation and Abstraction
Encapsulation hides the internal state, while abstraction shows only the essential features.

```javascript

class BankAccount {
  #balance;
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
```

## 7. Regular Expressions (Regex)
7.1 Basic Syntax
Regex patterns are used for matching text based on specified patterns.

```javascript

let regex = /hello/i;
```

7.2 Flags and Character Sets
Flags modify the search behavior, while character sets define a group of characters.

```javascript
let regexGlobal = /hello/g;
let regexCharSet = /[abc]/;
```

## 8. TypeScript
8.1 Static Typing
TypeScript adds static typing to JavaScript, helping catch errors early.

```typescript

let name: string = "John";
name = 42; // Error: Type 'number' is not assignable to type 'string'
```

8.2 Interfaces and Enums
Interfaces define object structures, and enums represent named constants.


```typescript

interface Person {
  name: string;
  age: number;
}

enum Direction {
  North,
  South,
  East,
  West,
}
```

8.3 Advanced Features
Includes features like custom error handling and dynamic type checking.

typescript
``` typescript
// @ts-ignore
function displayJoke(joke: Joke) {
  joke.category = "update";
}
```
