# Project Documentation: skole-del2

Welcome to the `skole-del2` project repository. This document provides an overview of the content related to ECMAScript 6 (ES6), Object-Oriented Programming (OOP), asynchronous programming (async/await), and error handling included in this project.

## 1. Introduction

This project includes notes and code examples for several major JavaScript topics:

1. **Object-Oriented Programming (OOP)**
2. **ECMAScript 6 (ES6)**
3. **Asynchronous Programming (Async/Await)**
4. **Error Handling**

The content is organized into the following folders: `OOP`, `Ecma`, `Asynch`, and `Errors`. Below is a detailed description of each folder and the contents related to these topics.

## 2. Object-Oriented Programming (OOP)

**Location:** `OOP/`

### 2.1 Overview

Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure code. In this section, you'll find various OOP concepts and examples.

### 2.2 Key Concepts

- **File:** `OOP/oop.js`

  - **Variables and Constants:** This section explains the use of `let` and `const` for defining variables and constants in OOP contexts.
  - **Functions:** Covers traditional functions and arrow functions with examples.
  - **Objects:** Discusses objects as collections of data and methods, and includes examples of object creation and usage.

### 2.3 Inheritance

- **File:** `OOP/oop.js`

  - **Inheritance:** Details how inheritance allows a class to inherit properties and methods from another class, promoting code reuse. Includes examples of base and derived classes.

### 2.4 Encapsulation

- **File:** `OOP/oop.js`

  - **Encapsulation:** Explains the concept of bundling data and methods together while restricting access to some components. Demonstrates the use of private fields.

### 2.5 Polymorphism

- **File:** `OOP/oop.js`

  - **Polymorphism:** Covers how methods can behave differently based on the object they are acting upon, with examples of method overriding.

### 2.6 Abstraction

- **File:** `OOP/oop.js`

  - **Abstraction:** Discusses the concept of hiding complex implementation details and exposing only the necessary features of an object. Provides examples of abstraction in OOP.

## 3. ECMAScript 6 (ES6)

**Location:** `Ecma/`

### 3.1 Overview

ECMAScript 6 (ES6), also known as ECMAScript 2015, introduces new features and syntax improvements to make JavaScript more powerful and easier to use.

### 3.2 Variables and Constants

- **File:** `Ecma/app.js`

  - **Variables with `let`:** Describes the use of `let` for block-scoped variables.
  - **Constants with `const`:** Explains how `const` is used for variables whose values cannot be changed.

### 3.3 Functions

- **File:** `Ecma/app.js`

  - **Arrow Functions:** Introduces arrow functions and their concise syntax, as well as the automatic binding of `this`.

### 3.4 Strings

- **File:** `Ecma/app.js`

  - **Template Literals:** Details how template literals make string manipulation easier, especially for embedding variables.

### 3.5 Objects

- **File:** `Ecma/app.js`

  - **Destructuring Assignment:** Explains how destructuring allows for the extraction of values from objects and arrays into separate variables.

### 3.6 Classes

- **File:** `Ecma/app.js`

  - **Classes:** Describes ES6 classes as templates for creating objects with shared properties and methods.

### 3.7 Modules

- **File:** `Ecma/app.js`

  - **Modules:** Covers how to use `export` and `import` statements to split code into separate files for better organization.

### 3.8 Promises

- **File:** `Ecma/app.js`

  - **Promises:** Discusses how promises handle asynchronous operations and manage the results of tasks that take time.

### 3.9 Symbols

- **File:** `Ecma/app.js`

  - **Symbols:** Introduces symbols as unique identifiers used to create unique property keys in objects.

## 4. Asynchronous Programming (Async/Await)

**Location:** `Asynch/`

### 4.1 Overview

Async/await is a syntax that simplifies working with asynchronous code. It allows you to write asynchronous code in a way that looks synchronous.

### 4.2 Async Functions

- **File:** `Asynch/asynch.js`

  - **Async Functions:** Describes how to use `async` functions with the `await` keyword to handle asynchronous operations more intuitively.

### 4.3 Using Async/Await with Promises

- **File:** `Asynch/asynch.js`

  - **Handling Promises:** Shows how to use async/await to manage the results of promises and handle errors.

## 5. Error Handling

**Location:** `Errors/`

### 5.1 Overview

Error handling in JavaScript involves managing and responding to runtime errors to ensure the application runs smoothly.

### 5.2 Handling Errors with try...catch

- **File:** `Errors/error.js`

  - **try...catch Statement:** Explains how to use `try...catch` to handle errors in synchronous code.

### 5.3 Error Handling in Promises

- **File:** `Errors/error.js`

  - **.catch() Method:** Describes how to handle errors in promises using the `.catch()` method.

### 5.4 Error Handling in Async/Await

- **File:** `Errors/error.js`

  - **try...catch with Async/Await:** Shows how to handle errors in asynchronous code using `try...catch` blocks within `async` functions.

### 5.5 Custom Error Classes

- **File:** `Errors/error.js`

  - **Custom Errors:** Discusses how to create and use custom error classes to manage specific types of errors more effectively.

## Summary

- **`OOP/`** folder: Contains Object-Oriented Programming notes and examples in `oop.js`.
- **`Ecma/`** folder: Contains ECMAScript 6 notes and examples in `app.js`, including sections on async/await and error handling.
- **`Asynch/`** folder: Contains notes and examples on asynchronous programming with `async/await` in `asynch.js`.
- **`Errors/`** folder: Contains notes and examples on error handling in JavaScript in `error.js`.
