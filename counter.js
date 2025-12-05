function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
};

const myCounter = counter();
console.log("Counter: " + myCounter());
console.log("Counter: " + myCounter());
console.log("Counter: " + myCounter());

let anotherCounter = counter();
console.log("Another Counter: " + anotherCounter());
console.log("Another Counter: " + anotherCounter());

//Explanation of above code:
// The outer function 'counter' initializes a variable 'count' to 0 and returns an inner function.
// The inner function increments 'count' by 1 each time it is called and returns the updated value.
// The inner function forms a closure, retaining access to the 'count' variable even after the outer function has finished executing.
// When 'myCounter' is called multiple times, it continues to increment and return the value of 'count'.
//Vaklue of count is preserved across multiple invocations of the inner function.

(function(){
    //IIFE to avoid polluting global namespace
    const password = "secret password";
    console.log("Inside IIFE, password is: " + password);
})();

//console.log("Outside IIFE, password is: " + password); //Uncommenting this line will cause an error as 'password' is not defined in the global scope

//Que: Create a pure function to transform a value
function double(val){
    return val * 2;
}
console.log("Double of 5 is: " + double(5));