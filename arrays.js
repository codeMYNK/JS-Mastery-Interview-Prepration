const obj = {
    name: "Mayank",
    age: 23,
    regular: function(){return this.name + " " + this.age;},
    arrow: () => {return this.name + " " + this.age;}
}
console.log("Regular Function: ", obj.regular()); // Mayank 23
console.log("Arrow Function: ", obj.arrow()); // undefined undefined


// let arr = [10, 20, 30, 40, 50];
let arr = new Array(10, 20, 30, 40, 50);

for(let i = 0; i < arr.length; i++){
    console.log("Index:", i, "Value:", arr[i]);
}

let arrayy = [5, 12, 8, 20, 3];
let newArrrrayyy = arrayy.filter(function(val){
    return val > 10;
})
console.log("Filtered Array (>10):", newArrrrayyy);


arr[2] = 100;
console.log("Updated Array:", arr);

arr.push(60);
console.log("After Push:", arr);

arr.pop();
console.log("After Pop:", arr);

arr.shift();
console.log("After Shift:", arr);

arr.unshift(5);
console.log("After Unshift:", arr);

console.log("Array as String:", arr.toString());

console.log("Joined Array:", arr.join(" - "));

//Slice gives a new array
console.log("Slice of Array (1,4):", arr.slice(1,4));

//Splice modifies the original array
arr.splice(2, 0, 25, 27);
console.log("After Splice (insert at index 2):", arr);

arr.splice(3, 2);
console.log("After Splice (remove 2 elements from index 3):", arr);

let newArr = [70, 80, 90];
let combinedArr = arr.concat(newArr);
console.log("Combined Array:", combinedArr);

combinedArr.sort((a, b) => a - b);
console.log("Ascending Sorted Array:", combinedArr);

combinedArr.sort((a, b) => b-a);
console.log("Descending Sorted Array:", combinedArr);

combinedArr.reverse();
console.log("Reversed Array:", combinedArr);

let index = combinedArr.indexOf(30);
console.log("Index of 30:", index);

let isPresent = combinedArr.includes(100);
console.log("Is 100 present?:", isPresent);

//on Applying Map, Filter, Reduce on array they accept a callback function
let mappedArr = combinedArr.map(x => x * 2);
console.log("Mapped Array (elements * 2):", mappedArr);

let filteredArr = combinedArr.filter(x => x > 50);
console.log("Filtered Array (elements > 50):", filteredArr);

let sum = combinedArr.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of all elements:", sum);

//Destructuring
let [first, second, ...rest] = combinedArr;
console.log("First Element:", first);
console.log("Second Element:", second);
console.log("Rest of the Elements:", rest);

//Iterating using for..of
console.log("Iterating using for..of:");
for(let value of combinedArr){
    console.log(value);
}

//Iterating using forEach
console.log("Iterating using forEach:");
combinedArr.forEach((value, index) => {
    console.log("Index:", index, "Value:", value);
});

//Spred Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = [...arr1, ...arr2];
console.log("Merged Array using Spread Operator:", mergedArr);

//2D Array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("2D Array (Matrix):", matrix);
console.log("Element at (1,2):", matrix[1][2]); // 6

//Flattening a 2D Array
let flatArray = matrix.flat();
console.log("Flattened Array:", flatArray);
//Finding Max and Min
let maxElement = Math.max(...combinedArr);
let minElement = Math.min(...combinedArr);
console.log("Max Element:", maxElement);
console.log("Min Element:", minElement);

//Array from String
let str = "Hello";
let charArray = Array.from(str);
console.log("Array from String:", charArray);

//Filling an Array
let fillArray = new Array(5).fill(0);
console.log("Filled Array:", fillArray);

//Array.of
let arrayOf = Array.of(1, 2, 3, 4, 5);
console.log("Array.of:", arrayOf);

//Finding index using findIndex
let findIndex = combinedArr.findIndex(x => x > 50);
console.log("Index of first element greater than 50:", findIndex);

//Finding element using find
let findElement = combinedArr.find(x => x > 50);
console.log("First element greater than 50:", findElement);

//Checking every element using every
let allGreaterThanTen = combinedArr.every(x => x > 10);
console.log("Are all elements greater than 10?:", allGreaterThanTen);

//Checking some elements using some
let someGreaterThanHundred = combinedArr.some(x => x > 100);
console.log("Is there any element greater than 100?:", someGreaterThanHundred);

//Diffrence between Map and forEach
// Map returns a new array after applying the function to each element
// forEach simply executes the function on each element without returning a new array
//For understanding whenever you see MAP just create a new array in mind

//Que: Sort behaviour without compareFn
let numArr = [3, 20, 100, 5, 50];
numArr.sort();
console.log("Sorted without compareFn:", numArr); // [100, 20, 3, 5, 50]
//Explanation: It converts numbers to strings and sorts lexicographically

//Correct way to sort numbers
numArr.sort((a, b) => a - b);
console.log("Sorted with compareFn:", numArr); // [3, 5, 20, 50, 100]

//Merge 2 arrays using spread operator
let arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];
let mergedArray = [...arrayA, ...arrayB];
console.log("Merged Array using Spread Operator:", mergedArray); // [1, 2, 3, 4, 5, 6]

//Que: Difference between slice and splice
let sampleArr = [10, 20, 30, 40, 50];
// Slice
let slicedArr = sampleArr.slice(1, 4);
console.log("Sliced Array (1,4):", slicedArr); // [20, 30, 40]
console.log("Original Array after Slice:", sampleArr); // [10, 20, 30, 40, 50]

// Splice
sampleArr.splice(2, 1, 25);
console.log("Array after Splice (remove 1 at index 2 and add 25):", sampleArr); // [10, 20, 25, 40, 50] 

//Clone the array properly (not by reference)
let originalArray = [1, 2, 3, 4, 5];
// Using spread operator
let clonedArray1 = [...originalArray];
// Using slice
let clonedArray2 = originalArray.slice();
// Using Array.from
let clonedArray3 = Array.from(originalArray);

clonedArray1[0] = 10;
console.log("Original Array after modifying clonedArray1:", originalArray); // [1, 2, 3, 4, 5]
console.log("clonedArray1:", clonedArray1); // [10, 2, 3, 4, 5]

//Using Array.isArray to check if a variable is an array
let var1 = [1, 2, 3];
let var2 = "Hello";

console.log("Is var1 an array?:", Array.isArray(var1)); // true
console.log("Is var2 an array?:", Array.isArray(var2)); // false

//Map vs forEach
let sampleArray = [1, 2, 3, 4, 5];

// Using map
let mappedArray = sampleArray.map(x => x * 2);
console.log("Mapped Array using map:", mappedArray); // [2, 4, 6, 8, 10]

// Using forEach
let forEachArray = [];
sampleArray.forEach(x => forEachArray.push(x * 2));
console.log("Array populated using forEach:", forEachArray); // [2, 4, 6, 8, 10]

// Note: map returns a new array, forEach does not return anything.