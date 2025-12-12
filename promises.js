//Que What is a Promise in JavaScript?
//Ans A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more manageable way by providing methods to handle success and failure cases.

//Promises have three states:
//1.Pending: Initial state, neither fulfilled nor rejected.
//2.Fulfilled: The operation completed successfully.
//3.Rejected: The operation failed.

//Creating a Promise

let pr = new Promise(function(resolve, reject){
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * 10);
        if(randomNumber > 5){
            resolve(`Success! The number is ${randomNumber}`);
        } else {
            reject(`Failure! The number is ${randomNumber}`);
        }
    }, 3000);
});

//Consuming a Promise

pr.then(function(value){
    console.log(value);
}).catch(function(value){
    console.log(value);
})