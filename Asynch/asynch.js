// Asynchronous JavaScript Overview
// Asynchronous JavaScript allows code to execute without blocking the main thread.
// This is crucial for tasks like fetching data from a server or reading files, where waiting for a response would otherwise freeze the application.

///////////////////////////////////////////////////////////////////////////////
// 1. Callbacks
///////////////////////////////////////////////////////////////////////////////
// A callback is a function passed as an argument to another function. It is executed after the completion of a task.
function fetchData(callback) {
  setTimeout(() => {
    // Simulating an asynchronous task with setTimeout (e.g., fetching data)
    const data = "Data fetched";
    callback(data); // Calling the callback function with the fetched data
  }, 2000); // 2 seconds delay
}

// Using the fetchData function with a callback
fetchData((data) => {
  console.log(data); // Output after 2 seconds: Data fetched
});

///////////////////////////////////////////////////////////////////////////////
// 2. Promises
///////////////////////////////////////////////////////////////////////////////
// A Promise represents a value that might be available now, or in the future, or never. It is used for handling asynchronous operations.
const fetchDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve("Data fetched with promise"); // Resolve the promise with data
    } else {
      reject("Error fetching data"); // Reject the promise with an error
    }
  }, 2000); // 2 seconds delay
});

// Using the fetchDataPromise function with .then() and .catch()
// .then() handles the successful completion of the promise.
// .catch() handles any errors that occur.
fetchDataPromise
  .then((data) => {
    console.log(data); // Output after 2 seconds: Data fetched with promise
  })
  .catch((error) => {
    console.error(error); // Handle any errors that occur
  });

///////////////////////////////////////////////////////////////////////////////
// 3. Async/Await
///////////////////////////////////////////////////////////////////////////////
// Async/Await is a syntax for working with promises that makes asynchronous code look synchronous.
// 'async' keyword declares a function as asynchronous, and 'await' pauses the execution of the function until the promise resolves.

async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise; // Await the result of the promise
    console.log(data); // Output after 2 seconds: Data fetched with promise
  } catch (error) {
    console.error(error); // Handle any errors that occur
  }
}

// Using the fetchDataAsync function
fetchDataAsync();

///////////////////////////////////////////////////////////////////////////////
// 4. Error Handling
///////////////////////////////////////////////////////////////////////////////
// Error handling is crucial for robust applications. It allows you to catch and manage errors gracefully.

function fetchDataWithErrorHandling(callback) {
  setTimeout(() => {
    const success = false; // Simulate failure
    if (success) {
      callback(null, "Data fetched"); // Call callback with data
    } else {
      callback("Error fetching data"); // Call callback with error
    }
  }, 2000); // 2 seconds delay
}

// Using the fetchDataWithErrorHandling function with error handling
fetchDataWithErrorHandling((error, data) => {
  if (error) {
    console.error(error); // Output if there is an error
  } else {
    console.log(data); // Output if data is fetched successfully
  }
});

///////////////////////////////////////////////////////////////////////////////
// 5. Chaining Promises
///////////////////////////////////////////////////////////////////////////////
// Promises can be chained to perform multiple asynchronous operations in sequence.
// Each .then() returns a new promise, which allows for chaining operations.

function fetchDataWithChaining() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from first step"); // Resolve first promise
    }, 1000); // 1 second delay
  })
    .then((data) => {
      console.log(data); // Output: Data from first step
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Data from second step"); // Resolve second promise
        }, 1000); // 1 second delay
      });
    })
    .then((data) => {
      console.log(data); // Output: Data from second step
    })
    .catch((error) => {
      console.error(error); // Handle errors in the chain
    });
}

// Using the fetchDataWithChaining function
fetchDataWithChaining();

///////////////////////////////////////////////////////////////////////////////
// Summary
///////////////////////////////////////////////////////////////////////////////
// Asynchronous JavaScript allows for non-blocking operations using callbacks, promises, and async/await.
// Callbacks are functions passed to other functions to be executed later.
// Promises represent the eventual completion or failure of an asynchronous operation.
// Async/Await provides a cleaner syntax for working with promises.
// Proper error handling ensures that your code can gracefully manage unexpected issues.
// Chaining promises enables multiple asynchronous operations to be performed sequentially.
