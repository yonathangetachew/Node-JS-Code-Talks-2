// What is a async/await?
// Async/await is a syntactic feature in JavaScript that allows you to write asynchronous code in a more synchronous and readable manner.

// Why is async/await useful?
// It provides a way to handle promises in a sequential and imperative style, making asynchronous programming easier to understand and maintain.

// What are pro/cons to using async/await?
// Pros: Readability, Error Handling (with try/catch blocks), Sequential Execution, Integration with existing code
// Cons: Support, Error handling (w/o try/catch blocks)

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      resolve(data);
    }, 2000);
  });
}

async function processData() {
  try {
    const result = await fetchData();
    console.log(result.message);
  } catch (error) {
    console.error(error);
  }
}

processData();

// In this example, we have an asynchronous function fetchData that returns a promise, simulating data fetching with a 2-second delay.
// The processData function is declared as an async function.
// Inside processData, we use await to pause the execution until the fetchData promise resolves. Once the promise is resolved, the result is assigned to the result variable. 
// We can then log the result.message to the console.
//  an error occurs, the catch block will catch the error, and we can log the error to the console using console.error.