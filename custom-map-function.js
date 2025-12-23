// Que: What is map function?
// Ans: The map function is a built-in method in JavaScript that allows you to create a new array by applying a provided function to each element of an existing array. It is commonly used for transforming data in arrays.

// Example of using the map function:
const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number squared
const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// In this example, the map function takes each element from the 'numbers' array,
// applies the function (num => num * num) to it, and returns a new array
// 'squaredNumbers' containing the squared values.

// Custom implementation of the map function
function customMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

// Example usage of customMap
const originalArray = [1, 2, 3, 4, 5];
const doubledArray = customMap(originalArray, (num) => num * 2);

console.log(doubledArray); // Output: [2, 4, 6, 8, 10]  