//What is this keyword?
//The "this" keyword in JavaScript refers to the object that is currently executing the code. It provides a way to access properties and methods of the object within its own context.

//Example 1: Using "this" in an object method
const person = {
    name: 'Alice',
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

person.greet(); // Output: Hello, my name is Alice

//Example 2: Using "this" in a constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getDetails = function() {
    return this.make + ' ' + this.model;
};

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getDetails()); // Output: Toyota Corolla

//Example 3: Using "this" in an event handler
const button = document.createElement('button');
button.textContent = 'Click me';

button.addEventListener('click', function() {
    console.log('Button clicked by ' + this.textContent);
});

document.body.appendChild(button); // When clicked, Output: Button clicked by Click me

//Example 4: Using "this" in arrow functions
const obj = {
    value: 42,
    getValue: function() {
        const arrowFunc = () => {
            return this.value;
        };
        return arrowFunc();
    }
};

console.log(obj.getValue()); // Output: 42

//Example 5: Using "this" with call, apply, and bind
function showDetails(age, city) {
    console.log(this.name + ' is ' + age + ' years old and lives in ' + city);
}

const user2 = {
    name: 'Bob'
};

showDetails.call(user2, 30, 'New York'); // Output: Bob is 30 years old and lives in New York
showDetails.apply(user2, [25, 'Los Angeles']); // Output: Bob is 25 years old and lives in Los Angeles

const boundShowDetails2 = showDetails.bind(user2, 28, 'Chicago');
boundShowDetails2(); // Output: Bob is 28 years old and lives in Chicago

//Example 6: Using "this" in classes
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

const dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a noise.      

//this in function
function showThis() {
    console.log(this);
}

showThis(); // In non-strict mode, Output: [object Window] (or global object in Node.js)
// In strict mode, Output: undefined

//this in method
const objMethod = {
    name: 'Object Method',
    method: function() {
        console.log(this.name);
    }
};

objMethod.method(); // Output: Object Method

// this in class
class MyClass {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
}

const myInstance = new MyClass('My Instance');
myInstance.display(); // Output: My Instance

//this in event handler
document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // Output: <button id="myButton">Click me</button>
});

//this in arrow function
const arrowFunc = () => {
    console.log(this);
};

arrowFunc(); // In global scope, Output: Window (or global object in Node.js)

//this in nested function
const nestedObj2 = {
    name: 'Nested Object',
    method: function() {
        function innerFunction() {
            console.log(this.name); // Output: undefined (in non-strict mode)
        }
        innerFunction();
    }
};

nestedObj2.method(); // Output: undefined

//Using "this" in a closure context
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            console.log('Count:', count);
        },
        decrement: function() {
            count--;
            console.log('Count:', count);
        }
    };
}

const counter = createCounter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1

//Using "this" in a closure with a configuration object
function createToaster(config) {
    return function (str) {
        let div = document.createElement("div");
        div.textContent = str;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;

        document.querySelector(".parent").appendChild(div);

        if (config.positionX !== "left" || config.positionY !== "top") {
            document.querySelector(".parent").className +=
                ` ${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
        }
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    };
}

let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: 3,
});
toaster("Download Done");
setTimeout(() => {
    toaster("Mayank accepted your request");
}, 2000);

setTimeout(() => {
    toaster("Bhati sent you a message");
}, 3500);

//In this example, the `createToaster` function returns a closure that captures the `config` object. The `this` keyword is not used here, but the closure allows access to the `config` properties within the returned function.
//The `toaster` function can be called multiple times, and it will use the same configuration for each toast message.
//This demonstrates how closures can maintain state and access variables from their outer scope, similar to how `this` works in object methods.
//This example also shows how closures can be used to create reusable functions with specific configurations, similar to how `this` is used in object-oriented programming.
//This pattern is useful for creating reusable components or functions that can be customized with different configurations, while still maintaining access to the original context.
//This approach allows for a clean separation of concerns, where the configuration is defined once and can be reused across multiple invocations of the toaster function.
//This pattern is particularly useful in UI development, where you might want to create reusable components that can be styled and positioned based on user preferences or application state.
//This example also highlights the flexibility of JavaScript functions and closures, allowing for dynamic behavior based on the provided configuration.
//By using closures, we can encapsulate functionality and maintain a clean interface for interacting with the toaster, while still allowing for customization through the configuration object.     

//THIS in Call, Apply, Bind
function showDetails(age, city) {
    console.log(this.name + ' is ' + age + ' years old and lives in ' + city);
}

const user = {
    name: 'Bob'
};

showDetails.call(user, 30, 'New York'); // Output: Bob is 30 years old and lives in New York
showDetails.apply(user, [25, 'Los Angeles']); // Output: Bob is 25 years old and lives in Los Angeles

const boundShowDetails = showDetails.bind(user, 28, 'Chicago');
boundShowDetails(); // Output: Bob is 28 years old and lives in Chicago

//This example demonstrates how the `this` keyword can be explicitly set using `call`, `apply`, and `bind` methods. 
//These methods allow you to control the context in which a function is executed, enabling you to use the same function with different objects while maintaining access to their properties.
//The `call` method invokes the function with a specified `this` value and individual arguments, while `apply` allows you to pass an array of arguments. 
//The `bind` method creates a new function with a bound `this` value, which can be invoked later with the specified arguments.
//This pattern is useful for creating functions that can operate on different objects while still accessing their properties through `this`.
//It allows for greater flexibility and reusability of functions, especially in scenarios where you need to work with multiple objects that share similar methods or behaviors.
//By using these methods, you can create a more modular and maintainable codebase, where functions can be reused across different contexts without duplicating code.
//This approach is particularly useful in scenarios where you want to create generic functions that can operate on various objects, such as event handlers, utility functions, or methods that need to be shared across different classes or modules.
//By leveraging the power of `this` and these methods, you can create a more dynamic and adaptable code structure that can easily accommodate changes in requirements or functionality.
//This pattern is commonly used in JavaScript libraries and frameworks to create reusable components and utilities that can be easily customized and extended by developers.
//This example also highlights the importance of understanding the `this` keyword in JavaScript, as it plays a crucial role in how functions interact with objects and their properties.
//By mastering the use of `this`, developers can write more efficient and effective code that leverages the full capabilities of JavaScript's object-oriented features.
//This pattern is particularly useful in UI development, where you might want to create reusable components that can be styled and positioned based on user preferences or application state.
//By using closures, we can encapsulate functionality and maintain a clean interface for interacting with the toaster, while still allowing for customization through the configuration object. 

//Why arrow function lose this for methods?
//Arrow functions do not have their own `this` context; they inherit `this` from the surrounding lexical scope. This means that when you use an arrow function as a method, it does not bind its own `this`, which can lead to unexpected behavior if you expect it to refer to the object it is called on.
const objArrow = {
    name: 'Arrow Object',
    method: () => {
        console.log(this.name); // Output: undefined (in non-strict mode)
    }
};

objArrow.method(); // Output: undefined

//In this example, the arrow function does not have its own `this`, so it refers to the global context (or undefined in strict mode), not the `objArrow` object. This is a key difference between regular functions and arrow functions in JavaScript.
//This behavior is intentional in JavaScript, as arrow functions are designed to provide a more concise syntax for functions that do not need their own `this` context, such as callbacks or event handlers.
//When you need a method that relies on `this` to refer to the object it is called on, you should use a regular function instead of an arrow function. This ensures that `this` behaves as expected and refers to the object instance.
//Using regular functions for methods allows you to maintain the expected behavior of `this`, ensuring that it refers to the object instance when the method is called.
//This is particularly important in object-oriented programming, where methods often need to access properties of the object they belong to.
//By using regular functions for methods, you can ensure that `this` behaves consistently and predictably, allowing for more robust and maintainable code.
//This pattern is commonly used in JavaScript classes and prototypes, where methods are defined using regular functions to ensure proper binding of `this`.
//Understanding the difference between arrow functions and regular functions in terms of `this` is crucial for writing effective JavaScript code, especially in scenarios involving object-oriented design or complex event handling.
//This example also highlights the importance of understanding the `this` keyword in JavaScript, as it plays a crucial role in how functions interact with objects and their properties.
//By mastering the use of `this`, developers can write more efficient and effective code that leverages the full capabilities of JavaScript's object-oriented features.
//This pattern is particularly useful in UI development, where you might want to create reusable components that can be styled and positioned based on user preferences or application state.
//By using closures, we can encapsulate functionality and maintain a clean interface for interacting with the toaster, while still allowing for customization through the configuration object.
//This approach allows for a clean separation of concerns, where the configuration is defined once and can be reused across multiple invocations of the toaster function.
//This pattern is particularly useful in UI development, where you might want to create reusable components that can be styled and positioned based on user preferences or application state.
//By using closures, we can encapsulate functionality and maintain a clean interface for interacting with the toaster, while still allowing for customization through the configuration object.
//This example also highlights the flexibility of JavaScript functions and closures, allowing for dynamic behavior based on the provided configuration.
//By using closures, we can encapsulate functionality and maintain a clean interface for interacting with the toaster, while still allowing for customization through the configuration object.
//This pattern is useful for creating reusable components or functions that can be customized with different configurations, while still maintaining access to the original context.
//This approach allows for a clean separation of concerns, where the configuration is defined once and can be reused across multiple invocations of the toaster function.
//This pattern is particularly useful in UI development, where you might want to create reusable components that can be styled and positioned based on user preferences or application state.
//By using closures, we can encapsulate functionality and maintain a clean interface for interacting with the toaster, while still allowing for customization through the configuration object.
//This example also highlights the flexibility of JavaScript functions and closures, allowing for dynamic behavior based on the provided configuration.
//By using closures, we can encapsulate functionality and maintain a clean interface for interacting with the toaster, while still allowing for customization through the configuration object.
//This pattern is useful for creating reusable components or functions that can be customized with different configurations, while still maintaining access to the original context.
//This approach allows for a clean separation of concerns, where the configuration is defined once and can be reused across multiple invocations of the toaster function.
//This pattern is particularly useful in UI development, where you might want to create reusable components that can be styled and positioned based on user preferences or application state.

//This inside event listener?
document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // Output: <button id="myButton">Click me</button
});

//In this example, the `this` keyword inside the event listener refers to the button element that triggered the event. This is because event listeners are called with the element that they are attached to as their context.
//This behavior allows you to access properties and methods of the element directly within the event handler, making it easy to manipulate the DOM or respond to user interactions.
//Using `this` in event listeners is a common pattern in JavaScript, as it provides a straightforward way to reference the element that triggered the event without needing to pass it explicitly.
//This approach is particularly useful in scenarios where you want to create dynamic behavior based on user interactions, such as updating styles, changing content, or triggering animations.
//By leveraging `this` in event listeners, you can create more interactive and responsive web applications that react to user input in real-time.
//This pattern is commonly used in JavaScript frameworks and libraries, where event listeners are attached to elements to handle user interactions and update the UI accordingly.
//Understanding how `this` works in event listeners is crucial for writing effective JavaScript code, as it allows you to create more modular and maintainable event handling logic.
//This example also highlights the importance of understanding the `this` keyword in JavaScript, as it plays a crucial role in how functions interact with objects and their properties.
//By mastering the use of `this`, developers can write more efficient and effective code that leverages the full capabilities of JavaScript's object-oriented features.
//This pattern is particularly useful in UI development, where you might want to create reusable components that can be styled and positioned based on user preferences or application state.
//By using closures, we can encapsulate functionality and maintain a clean interface for interacting with the toaster, while still allowing for customization through the configuration object.
//This approach allows for a clean separation of concerns, where the configuration is defined once and can be reused across multiple invocations of the toaster function.
//This pattern is particularly useful in UI development, where you might want to create reusable components that can be styled and positioned based on user preferences or application state.
//By using closures, we can encapsulate functionality and maintain a clean interface for interacting with the toaster, while still allowing for customization through the configuration object.
//This example also highlights the flexibility of JavaScript functions and closures, allowing for dynamic behavior based on the provided configuration.
//By using closures, we can encapsulate functionality and maintain a clean interface for interacting with the toaster, while still allowing for customization through the configuration object.
//This pattern is useful for creating reusable components or functions that can be customized with different configurations, while still maintaining access to the original context.
//This approach allows for a clean separation of concerns, where the configuration is defined once and can be reused across multiple invocations of the toaster function.
//This pattern is particularly useful in UI development, where you might want to create reusable components that can be styled and positioned based on user preferences or application state.
//By using closures, we can encapsulate functionality and maintain a clean interface for interacting with the toaster, while still allowing for customization through the configuration object.
//This example also highlights the flexibility of JavaScript functions and closures, allowing for dynamic behavior based on the provided configuration.
//By using closures, we can encapsulate functionality and maintain a clean interface for interacting with the toaster, while still allowing for customization through the configuration object.
//This pattern is useful for creating reusable components or functions that can be customized with different configurations, while still maintaining access to the original context.
//This approach allows for a clean separation of concerns, where the configuration is defined once and can be reused across multiple invocations of the toaster function.
//This pattern is particularly useful in UI development, where you might want to create reusable components that can be styled and positioned based on user preferences or application state.

//This in nested function?
const nestedObj = {
    name: 'Nested Object',
    method: function() {
        function innerFunction() {
            console.log(this.name); // Output: undefined (in non-strict mode)
        }
        innerFunction();
    }
};

nestedObj.method(); // Output: undefined



let obj2 = {
    name: "Mayank",
    age: 25,
    sayName: function() {
        function defg() {
            console.log(this); // Output: undefined (in non-strict mode)
        }
        defg(); // Calling the inner function
    },
};

//To fix above issue
let obj3 = {
    name: "Mayank",
    age: 25,
    sayName: function() {
        const defg = () => {
            console.log(this.name); // Output: Mayank
        };
        defg(); // Calling the inner arrow function
    },
}


//Global -> window
//Function -> window
//Method with es5 function -> object
// Method whith es6 arrow function -> window
//ES5 function inside ES5 method -> window
//ES6 arrow function inside ES5 method -> object
//Event handlwe -> element
//class -> blank object
//Nested function -> window
//Nested arrow function -> object

//MANUAL BINDING -> BIND, CALL, APPLY

