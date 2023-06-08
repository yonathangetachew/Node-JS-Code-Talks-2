//  Explain how the “this” keyword works differently in arrow functions vs normal functions.

// In a regular function, the value of 'this' is determined by how the function is called.
// When a regular function is called as a method of an object, this refers to the object itself.
// When a regular function is called standalone or globally, this refers to the global object (e.g., window in a browser or global in Node.js).

// In an arrow function, the value of this is lexically inherited from its surrounding scope.
// The lexical scope of this in an arrow function is determined by the nearest non-arrow function parent.
// Arrow functions do not have their own this context and do not bind their own this value.

const obj = {
    name: 'John',
    regularFunc: function() {
      console.log('Regular function:', this.name);
    },
    arrowFunc: () => {
      console.log('Arrow function:', this.name);
    }
  };
  
  // Regular function - this refers to the object
  obj.regularFunc(); // Output: Regular function: John
  
  // Arrow function - this refers to the lexical scope (global object)
  obj.arrowFunc(); // Output: Arrow function: undefined
  