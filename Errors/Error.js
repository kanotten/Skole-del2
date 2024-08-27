// Error Handling in JavaScript
// Error handling is a critical part of writing robust applications. It involves anticipating, detecting, and managing errors that may occur during code execution.

///////////////////////////////////////////////////////////////////////////////
// 1. Handling Errors with try...catch
///////////////////////////////////////////////////////////////////////////////
// The try...catch statement allows you to test a block of code for errors and handle those errors gracefully.

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero"); // Throw an error if division by zero is attempted
    }
    const result = a / b;
    return result;
  } catch (error) {
    console.error(`Error: ${error.message}`); // Catch and log the error message
  }
}

// Using the divideNumbers function
const result1 = divideNumbers(10, 2); // Valid division
console.log(result1); // Output: 5

const result2 = divideNumbers(10, 0); // Division by zero
// Output: Error: Cannot divide by zero

///////////////////////////////////////////////////////////////////////////////
// 2. Error Handling in Promises
///////////////////////////////////////////////////////////////////////////////
// Promises provide built-in error handling with the .catch() method. This allows you to handle errors that occur during asynchronous operations.

const fetchDataWithPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false; // Simulate a failure
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Failed to fetch data"); // Reject the promise with an error
    }
  }, 2000); // 2 seconds delay
});

// Using the promise with .then() and .catch() for handling success and errors
fetchDataWithPromise
  .then((data) => {
    console.log(data); // Output if the promise resolves successfully
  })
  .catch((error) => {
    console.error(`Error: ${error}`); // Output if the promise is rejected
  });

///////////////////////////////////////////////////////////////////////////////
// 3. Error Handling in Async/Await
///////////////////////////////////////////////////////////////////////////////
// Async/await syntax provides a way to handle asynchronous operations in a more synchronous-like manner. Errors can be handled using try...catch blocks within async functions.

async function fetchDataWithAsync() {
  try {
    const data = await fetchDataWithPromise; // Await the promise
    console.log(data); // Output if the promise resolves successfully
  } catch (error) {
    console.error(`Error: ${error}`); // Output if an error occurs
  }
}

// Using the async function
fetchDataWithAsync();

///////////////////////////////////////////////////////////////////////////////
// 4. Custom Error Classes
///////////////////////////////////////////////////////////////////////////////
// You can create custom error classes to handle specific types of errors more effectively.

class CustomError extends Error {
  constructor(message) {
    super(message); // Call the parent class constructor with the error message
    this.name = "CustomError"; // Set a custom error name
  }
}

function performOperation() {
  throw new CustomError("This is a custom error"); // Throw a custom error
}

// Using the custom error class
try {
  performOperation();
} catch (error) {
  if (error instanceof CustomError) {
    console.error(`Custom Error: ${error.message}`); // Handle custom errors specifically
  } else {
    console.error(`General Error: ${error.message}`); // Handle general errors
  }
}

///////////////////////////////////////////////////////////////////////////////
// Summary
///////////////////////////////////////////////////////////////////////////////
// Error handling in JavaScript involves:
//
// 1. **try...catch:** Used for synchronous code to handle errors within a block of code.
// 2. **Promises:** Use .catch() to handle errors in asynchronous operations.
// 3. **Async/Await:** Combine with try...catch for a more synchronous-like approach to handling asynchronous errors.
// 4. **Custom Error Classes:** Create custom error types for more specific error handling.
//
// Proper error handling ensures that your application can manage unexpected situations gracefully and provide useful feedback to users or developers.
