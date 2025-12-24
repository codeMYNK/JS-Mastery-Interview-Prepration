//Que: what is event loop in javascript?
//Ans: The event loop is a fundamental concept in JavaScript that allows for non-blocking, asynchronous programming. It is responsible for managing the execution of code, handling events, and executing callback functions in a way that keeps the application responsive.

// JavaScript is single-threaded, meaning it can only execute one piece of code at a time. However, it can perform asynchronous operations (like I/O tasks, timers, or network requests) without blocking the main thread. This is where the event loop comes into play.

//Que: how many queues are there in event loop?
//Ans: In the event loop, there are primarily two types of queues:
// 1. Callback Queue (or Task Queue): This queue holds callback functions that are ready to be executed after asynchronous operations complete. Examples of such operations include setTimeout, setInterval, and I/O tasks. When the call stack is empty, the event loop takes the first callback from this queue and pushes it onto the call stack for execution.
// 2. Microtask Queue: This queue holds microtasks, which are typically created by promises (using .then() or async/await). Microtasks have a higher priority than tasks in the callback queue. After executing a task from the call stack, the event loop will first process all microtasks in the microtask queue before moving on to the next task in the callback queue.

// In summary, the event loop manages two main queues: the Callback Queue for regular asynchronous tasks and the Microtask Queue for promise-related tasks, ensuring efficient execution of asynchronous code in JavaScript.



// How the Event Loop Works:
// 1. Call Stack: When a function is called, it gets added to the call stack. The JavaScript engine executes functions from the call stack one at a time.
// 2. Web APIs: When an asynchronous operation (like setTimeout or an HTTP request) is initiated, it is handled by the browser's Web APIs (or Node.js APIs in a server environment). These operations run outside the main thread.
// 3. Callback Queue: Once an asynchronous operation is completed, its callback function is added to the callback queue (also known as the task queue).
// 4. Event Loop: The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first callback from the callback queue and pushes it onto the call stack for execution.
// 5. Microtask Queue: In addition to the callback queue, there is also a microtask queue (used for promises). The event loop gives priority to the microtask queue over the callback queue. After executing a task from the call stack, it will first process all microtasks before moving on to the next task in the callback queue.

// Example:
console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('End');

// Output:
// Start
// End
// Promise callback
// Timeout callback

// In this example, even though the setTimeout has a delay of 0 milliseconds, the promise callback is executed first because it is placed in the microtask queue, which has higher priority than the callback queue used by setTimeout.

// The event loop is crucial for enabling JavaScript to handle asynchronous operations efficiently, allowing developers to build responsive web applications.

// Example with Async/Await:
async function fetchData() {
  console.log('Fetching data...');
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data received');
    }, 2000);
  });
  console.log(data);
}

console.log('Before fetch');
fetchData();
console.log('After fetch');

// Output:
// Before fetch
// Fetching data...
// After fetch
// Data received

// In this example, the async function fetchData uses await to pause execution until the promise resolves. Meanwhile, the event loop allows other code (like 'After fetch') to run while waiting for the asynchronous operation to complete.

//Que: What is web APIs and CallStack?
//Ans: Web APIs and Call Stack are two important concepts in JavaScript that play a crucial role in its execution model, especially in the context of asynchronous programming.

// 1. Web APIs:
// Web APIs (Application Programming Interfaces) are provided by the browser (or the environment, like Node.js) to enable JavaScript to perform tasks that are not part of the core language. These APIs allow JavaScript to interact with the browser's features and capabilities, such as manipulating the DOM, making network requests, handling timers, and more.
// Examples of Web APIs include:
// - DOM API: For manipulating HTML and CSS.
// - Fetch API: For making network requests.
// - setTimeout and setInterval: For scheduling code execution after a delay.
// - Geolocation API: For accessing the user's location.
// When JavaScript code calls a Web API, the operation is handled outside the main thread, allowing the JavaScript engine to continue executing other code without blocking.

// 2. Call Stack:
// The Call Stack is a data structure used by the JavaScript engine to keep track of function calls. It operates on a Last In, First Out (LIFO) principle, meaning that the last function added to the stack is the first one to be executed.
// When a function is called, it is pushed onto the call stack. The JavaScript engine executes the function at the top of the stack. If that function calls another function, the new function is pushed onto the stack, and so on. Once a function completes its execution, it is popped off the stack, and control returns to the function below it.
// The call stack is essential for managing function execution and maintaining the order of operations in synchronous code.

// Interaction Between Web APIs and Call Stack:
// When an asynchronous operation is initiated (e.g., a setTimeout or a fetch request), the JavaScript engine delegates that operation to the appropriate Web API. The operation runs independently of the call stack. Once the operation completes, its callback function is placed in the callback queue.
// The event loop continuously monitors the call stack and the callback queue. If the call stack is empty, the event loop takes the first callback from the callback queue and pushes it onto the call stack for execution.
// This interaction allows JavaScript to handle asynchronous operations efficiently while maintaining a single-threaded execution model.

// Example:
console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 1000);

console.log('End');

// Output:
// Start
// End
// Timeout callback

// In this example, the setTimeout function uses the Web API to schedule a callback after 1 second. The call stack processes the synchronous code first ('Start' and 'End'), and after the timeout, the callback is executed from the callback queue.

// Summary:
// - Web APIs provide additional functionality to JavaScript, allowing it to perform tasks beyond its core capabilities.
// - The Call Stack manages function execution in a LIFO manner, ensuring the correct order of operations.
// - The interaction between Web APIs, the Call Stack, and the event loop enables JavaScript to handle asynchronous operations effectively.

//Call Stack (Execution Stack)

//JS single-threaded hai -> means ek time pe ek hi kaam kar sakta hai
//Jab function call hota hai to wo call stack me push ho jata hai top pai
//Jab function ka kaam complete ho jata hai to wo call stack se pop ho jata hai

function firstFunction() {
  console.log('Inside firstFunction');
  secondFunction();
  console.log('Exiting firstFunction');
}

function secondFunction() {
  console.log('Inside secondFunction');
}

console.log('Start');
firstFunction();
console.log('End');

//Output:
// Start
// Inside firstFunction
// Inside secondFunction
// Exiting firstFunction
// End

//Is example me jab firstFunction call hota hai to wo call stack me push ho jata hai, phir uske andar secondFunction call hota hai jo uske upar push ho jata hai. Jab secondFunction complete hota hai to wo pop ho jata hai aur control wapas firstFunction ko milta hai. Jab firstFunction complete hota hai to wo bhi pop ho jata hai aur finally 'End' print hota hai.

function a(){
  console.log("a");
}
function b(){
  a();
  console.log("b");
}
function c(){
  b();
  console.log("c");
}
c();
//Output:
// a
// b
// c

//Is example me c() call hota hai to wo call stack me push hota hai, phir uske andar b() call hota hai jo uske upar push hota hai, phir b() ke andar a() call hota hai jo sabse upar push hota hai. Jab a() complete hota hai to wo pop ho jata hai aur control wapas b() ko milta hai, phir b() complete hota hai to wo bhi pop ho jata hai aur control wapas c() ko milta hai. Finally c() complete hota hai aur wo bhi pop ho jata hai.

//Output:
// a
// b
// c
