//variable function deceleration
// let fnc = function(){

// }
// fnc();

//arrow function deceleration
let fnc = () => {
    console.log("Hello from arrow function");
}
fnc();

//single line arrow function
let fnc2 = () => console.log("Hello from single line arrow function");
fnc2();

//arrow function with return value
let sum = (a, b) => a + b;
console.log("Sum is: " + sum(5, 10));

//arrow function with single parameter
let square = x => x * x;
console.log("Square is: " + square(6));

//arrow function without parameters
let greet = () => "Hello, World!";
console.log(greet());

//arrow function used as a callback
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
console.log("Doubled numbers: " + doubled);

//function deceration
function multiply(a, b) {
    return a * b;
}
console.log("Multiplication is: " + multiply(4, 5));

//function expression
let divide = function(a, b) {
    return a / b;
}

//function default parameters
function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greetUser());
console.log(greetUser("Alice"));

//IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE");
})();

//Arrow function IIFE
(() => {
    console.log("This is an arrow function IIFE");
})();

//Rest operators in functions
function sumAll(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
console.log("Sum of all numbers: " + sumAll(1, 2, 3, 4, 5));

function abcd(...values){
    console.log("abcd: ", values);
}
abcd(1,2,3,4,5,6,7,8,9,10);

//Spread operator in functions
function findMax(...args) {
    return Math.max(...args);
}
console.log("Maximum number is: " + findMax(10, 20, 5, 30, 15));

//Function as first-class citizens
function operate(a, b, operation) {
    return operation(a, b);
}
console.log("Operation result: " + operate(10, 5, (x, y) => x - y));

//Callback function example
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}
fetchData(data => {
    console.log("Fetched Data: " + data);
});

//Function returning another function
function outerFunction(msg) {
    return function innerFunction() {
        console.log(msg);
    }
}
const myFunction = outerFunction("Hello from inner function");
myFunction();

//Function hoisting example
hoistedFunction();
function hoistedFunction() {
    console.log("This function is hoisted");
}

//Anonymous function example
setTimeout(function() {
    console.log("This is an anonymous function");
}, 500);

//Arrow function anonymous example
setTimeout(() => {
    console.log("This is an arrow function anonymous");
}, 500);

//Higher-order function example
function higherOrderFunction(fn) {
    return function(x) {
        return fn(x) * 2;
    }
}
const doubleValue = higherOrderFunction(x => x + 3);
console.log("Higher-order function result: " + doubleValue(5));

//Function with closure
function closureExample() {
    let count = 0;
    return function() {
        count++;
        console.log("Count: " + count);
    }
}
const counter = closureExample();
counter();
counter();
counter();

//Pure function example
function pureFunction(x, y) {
    return x + y;
}
console.log("Pure function result: " + pureFunction(3, 4));

//Impure function example
let z = 10;
function impureFunction(x) {
    return x + z;
}
console.log("Impure function result: " + impureFunction(5));

//Recursive function example
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5: " + factorial(5));

//Function with rest and spread operators combined
function combineAndSum(...arrays) {
    const combined = [].concat(...arrays);
    return combined.reduce((acc, val) => acc + val, 0);
}
console.log("Combined and summed value: " + combineAndSum([1, 2], [3, 4], [5]) );

//First class function example with array methods
//functions can be treated as values
let nums = [1, 2, 3, 4, 5];
let squaredNums = nums.map(function(n) {
    return n * n;
});
console.log("Squared Numbers: " + squaredNums);

let filteredNums = nums.filter(n => n % 2 === 0);
console.log("Filtered Even Numbers: " + filteredNums);

let total = nums.reduce((acc, val) => acc + val, 0);
console.log("Total Sum: " + total); 

//Higher order function example
function applyOperation(arr, operation) {
    return arr.map(operation);
}
let incrementedNums = applyOperation(nums, n => n + 1);
console.log("Incremented Numbers: " + incrementedNums);

let decrementedNums = applyOperation(nums, n => n - 1);
console.log("Decremented Numbers: " + decrementedNums);

//closures example
function makeMultiplier(factor) {
    return function(x) {
        return x * factor;
    }
}
let double = makeMultiplier(2);
let triple = makeMultiplier(3);
console.log("Double of 5: " + double(5));
console.log("Triple of 5: " + triple(5));

//Currying example
function curriedAdd(a) {
    return function(b) {
        return a + b;
    }
}
let addFive = curriedAdd(5);
console.log("5 + 10 = " + addFive(10));
console.log("5 + 20 = " + addFive(20));

//Hoisting Variables and Functions
console.log("Hoisted Function Call: " + hoistedVarFunction(3, 4));
function hoistedVarFunction(x, y) {
    return x * y;
}

//console.log("Hoisted Variable: " + hoistedVar); // Uncommenting this line will cause an error
var hoistedVar = 10;
console.log("Hoisted Variable after declaration: " + hoistedVar);

// This will cause an error because abcd is not hoisted
// abcd();

// let abcd = function(){
//     console.log("This is abcd function");
// }

//Hoisting with let and const
// console.log("Hoisted Let Variable: " + hoistedLet); // Uncommenting this line will cause an error
let hoistedLet = 20;
var hoistedVar = 20;
console.log("Hoisted Let Variable after declaration: " + hoistedLet);
console.log("Hoisted Var Variable after declaration: " + hoistedVar);

//console.log("Hoisted Const Variable: " + hoistedConst); // Uncommenting this line will cause an error
const hoistedConst = 30;
console.log("Hoisted Const Variable after declaration: " + hoistedConst);

//Hoisted function example
hoistedFunctionExample();
function hoistedFunctionExample() {
    console.log("This is a hoisted function example");
}

//Non-hoisted function expression example
// nonHoistedFunctionExample(); // Uncommenting this line will cause an error
let nonHoistedFunctionExample = function() {
    console.log("This is a non-hoisted function expression example");
};
nonHoistedFunctionExample();

//Hoisting with arrow functions
// arrowFunctionExample(); // Uncommenting this line will cause an error
let arrowFunctionExample = () => {
    console.log("This is an arrow function example");
};
arrowFunctionExample();