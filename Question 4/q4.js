// Using only the filter method on the numbers array, create a function that returns a new array that only contains the numbers divisible by both 3 and 6 but NOT 9. 

const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];

function filterNumbers(numbers) {
    return numbers.filter((num) => num % 3 === 0 && num % 6 === 0 && num % 9 !== 0);
  }
  
  const filteredNumbers = filterNumbers(numbers);
  console.log(filteredNumbers);