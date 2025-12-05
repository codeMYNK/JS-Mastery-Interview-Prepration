//Que1: what the diffrence between function declaration and function expression in terms of hoisting?
//Ans: Function declarations are hoisted, meaning they can be called before they are defined in the code. Function expressions, on the other hand, are not hoisted. If you try to call a function expression before it is defined, it will result in an error.

greet();

// let greet = function(){ //throw error when function declared in variable
function greet(){
    console.log("Hello, World!");
}

//Que3 : convert it to arrow function
//Ans:
let greetArrow = (val) => {
    console.log("Hello, World from arrow function!   "+ val);
}
greetArrow("!!!");

//Que3: identify parameters and arguments with example
//Ans: Parameters are the variables listed in the function definition, while arguments are the actual values passed to the function when it is called.

function add(a, b){ //a and b are parameters
    return a + b;
}

let result = add(5, 10); //5 and 10 are arguments
console.log("Result is: " + result);

//Ques5 : how many parameters does this function have and how many arguments does this pass and output?
function demo(a, b, c){
    console.log("a: " + a);
    console.log("b: " + b);
    console.log("c: " + c);
}
demo(1, 2); //function has 3 parameters but only 2 arguments are passed
//Output will be undefined for c as no argument is passed for it


//Que6: Predict output?
function sayHi(name = "Guest"){
    console.log("Hi", name);
}
sayHi(); //Output: Hi Guest

//Que7: What does the ... (spread operator) mean in parameters?
//Ans: The ... (spread operator) in parameters allows a function to accept an indefinite number of arguments as an array.
function sumAll(...numbers){
    return numbers.reduce((acc, val) => acc + val, 0);
}

function abcd(a, b, c, ...values){
    console.log(a, b, c, values);
}
abcd(1, 2, 3, 4, 5, 6, 7); //a=1,b=2,c=3, values=[4,5,6,7]

console.log("Sum is: " + sumAll(1, 2, 3, 4, 5));

//Que8: Use rest parameter to accept any number of scores and return the total score.
function totalScore(...scores){
    // return scores.reduce((total, score) => total + score, 0);
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    })
    return total;
}

console.log("Total Score: " + totalScore(10, 20, 30, 40));

//Que9: Fix the function using early return?
function checkAge(age){
    if(age < 18){
        console.log("Too young");
    } else{
        console.log("Allowed");
    }
}

//Answwer of 9:
function checkAgeFixed(age){
    if(age < 18) return "Too young";
    return "Allowed";
}
console.log(checkAgeFixed(16));

//Que 10: Function with empty return
function doNothing(){
    return;
}
console.log("doNothing returns: " + doNothing()); //undefined

//Que10: What are High Order Functions?
//Ans: Higher-order functions are functions that can take other functions as arguments or return functions as their result.
function highOrderFunction(fn, value){
    return fn(value);
}

function square(x){
    return x * x;
}

console.log("High Order Function Result: " + highOrderFunction(square, 5)); //25

//Que11: Identify what is higher order function in below?
[1,2,3].map(function(x){
    return x*2;
})
//Ans: The map function is a higher-order function because it takes a function as an argument.

//Que12: what is closure? When it is created?
//Ans: A closure is a function that retains access to its lexical scope even when the function is executed outside that scope. Closures are created when a function is defined inside another function, allowing the inner function to access variables from the outer function even after the outer function has finished executing.
function outer(){
    let count = 0;
    return function inner(){
        count++;
        return count;
    }
}

const counter = outer();
console.log("Closure count: " + counter());

//Que13: what is hoisting in JavaScript?
//Ans: Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use functions and variables before they are declared in the code. However, only the declarations are hoisted, not the initializations.

hoistedFunc(); //Works because of hoisting
function hoistedFunc(){
    console.log("This function is hoisted!");
}

// Que14: what is currying in JavaScript?
// Ans: Currying is a technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions, enabling you to create specialized functions by fixing some arguments.
function curryAdd(a){
    return function(b){
        return a + b;
    }
}

const addFive = curryAdd(5);
console.log("Curried Function Result: " + addFive(10)); //15

//Que15: what is th euse of IIFE? name one real-world use case of IIFE?
//Ans: IIFE (Immediately Invoked Function Expression) is used to create a new scope and avoid polluting the global namespace. It is often used for data privacy and to execute code immediately without leaving any traces in the global scope.
//Real-world use case: IIFE is commonly used in module patterns to encapsulate code and expose only specific parts of it.

(function(){
    let privateVar = "I am private";
    console.log(privateVar);
})();   

// console.log(privateVar) // Error: privateVar is not defined

let shery = (function(){
    let score = 0;
    return{
        getScore: function(){
            return score;
        },
        setScore: function(val){
            score = val;
        }
    }
})();

