// What is a promise ?
// A promise is an object in JavaScript that represents the eventual completion or 
// failure of an asynchronous operation and its resulting value.

// What are promises used for?
// to handle asynchronous operations in a more readable and manageable way, especially
// when dealing with multiple asynchronous operations or dependent callbacks.

// What are pros/cons to using a promise?
// Pros: Readability, Error Handling, Chaining, Composition
// Cons: Complexity, Browser Compatibility

// EXAMPLE 1
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API request
      setTimeout(() => {
        const data = { message: 'Data fetched successfully' };
        resolve(data);
        // If an error occurs, use `reject` instead:
        // reject(new Error('Failed to fetch data'));
      }, 2000);
    });
  }
  
  // Using the promise
  fetchData()
    .then((data) => {
      console.log(data.message);
    })
    .catch((error) => {
      console.error(error);
    });
  