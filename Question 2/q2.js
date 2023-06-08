// What is a callback?
// A callback is a function that is passed as an argument to another function and is executed at a later point in time.

// What is callback hell?
// Callback hell refers to a situation where multiple callbacks are nested within each other, making the code difficult to read, understand, and maintain.

// Why does callback hell occur and why should we avoid callback hell?
// It occurs when you have multiple asynchronous operations that depend on the results of each other, leading to deeply nested and indented code.
// To avoid callback hell and improve code readability, promises or other async/await-based solutions are preferred, as they provide a more structured and sequential approach to handling asynchronous operations.


// Example
asyncOperation1((result1) => {
    asyncOperation2(result1, (result2) => {
      asyncOperation3(result2, (result3) => {
        // ...more nested callbacks
        asyncOperationN(resultN, (resultN) => {
          // Final callback
        });
      });
    });
  });
  