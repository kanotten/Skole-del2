// notes on typescript
TypeScript is a superset of JavaScript.
This means all valid JavaScript code is also valid TypeScript code.
However, TypeScript adds features on top of JavaScript,
the main one being static typing. Static typing allows you to define the types of variables,
function parameters, and return values, which can catch errors early in the development process.

Basic Differences Between TypeScript and JavaScript
TypeScript: Supports static typing, interfaces, enums, and advanced features.
It's like JavaScript but with additional safety and features.
JavaScript: A dynamic,
loosely typed language that doesn't require you to define types for variables.

Key Concepts in TypeScript

1. Static Typing
In JavaScript, variables can change type dynamically,
whereas in TypeScript, you define what type a variable is and it should stick to that type.

example:

`let name: string = "John";`  // 'name' is a string, it can't be assigned anything other than a string
`name = 42;`  // TypeScript will throw an error here, preventing this mistake

In JavaScript,
the above example would not cause an error.
But in TypeScript, this type mismatch would be caught early.

2. Type Inference
You don't always need to explicitly define types in TypeScript;
it can infer types based on the assigned value.

```typescript
let age = 25;  // TypeScript automatically infers 'age' is a number
age = "twenty-five";  // Error! 'age' is expected to be a number
```

3. Interfaces
TypeScript allows you to define the structure of objects using interfaces,
making your code more robust and easier to understand.

```typescript
interface Person {
  name: string;
  age: number;
}

let john: Person = { name: "John", age: 25 };  // This works
let jane: Person = { name: "Jane" };  // Error! Missing 'age' property

```
4. Enums
Enums allow you to define a set of named constants, improving code readability.

```typescript

enum Direction {
  North,
  South,
  East,
  West,
}

let currentDirection: Direction = Direction.North;  // currentDirection will have the value 0

```
4. Enums
Enums allow you to define a set of named constants, improving code readability.

```typescript

enum Direction {
  North,
  South,
  East,
  West,
}

let currentDirection: Direction = Direction.North;  // currentDirection will have the value 0

```

When to Use TypeScript?
You should use TypeScript when:

Building large-scale applications: TypeScript helps catch errors during development,
making your code more reliable and easier to maintain.
Working in teams:
Static types and interfaces make it easier for developers to collaborate and understand each other’s code.
Code that needs future scaling: As your project grows, TypeScript's type system helps keep code organized and manageable.
When to Use JavaScript?
JavaScript might be preferred for:

Small projects: If your project is simple and small, plain JavaScript might be quicker.
Prototyping:
JavaScript’s flexibility makes it easier to quickly prototype ideas.
Browser scripting: JavaScript is natively supported by all browsers,
so for simple browser-based tasks,
it's more straightforward.
Real-World Usage
TypeScript is widely used in large, complex web applications. Companies like Microsoft, Slack, and Airbnb use it because it catches bugs earlier in development and makes collaboration easier.
JavaScript is still more common in smaller projects,
frontend web scripting, and in frameworks like jQuery,
where you don't need the extra safety or complexity of TypeScript.
Practical Example of TypeScript vs JavaScript

JavaScript

```javascript
function greet(name) {
  return "Hello, " + name;
}
greet(123);  // Works, but this might cause issues later on

```
Typescript

```typescript
function greet(name: string): string {
  return "Hello, " + name;
}
greet(123);  // Error! TypeScript catches this error before runtime

```
In TypeScript, the code is safer because it ensures the name parameter is always a string.

Which is More Used?
JavaScript is still more widely used since it's the foundation of the web, and it's the only language that runs natively in browsers.
TypeScript is gaining popularity quickly because of its ability to improve the quality of JavaScript code, especially in larger, more complex applications.
Conclusion
Use TypeScript if you’re working on a large-scale, long-term project where the safety of static typing and robust tooling is essential.
Use JavaScript if you need quick flexibility and are working on smaller, more dynamic projects or scripts.
By adding TypeScript to your workflow, you can catch more bugs during development and write more reliable code, without losing the flexibility and power of JavaScript!
