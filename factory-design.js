//Observer Design Pattern Example
class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name}, you have successfully subscribed to the channel!`);
    }

    unsubscribe(user){
        this.subscribers = this.subscribers.filter(sub => sub !== user);
        user.update(`${user.name}, you have unsubscribed from the channel.`);
    }
    notify(message){
        this.subscribers.forEach((sub) => sub.update(message));
    }
}

class User{
    constructor(name){
        this.name = name;
    }

    update(data){
        console.log(`Notification for ${this.name}: ${data}`);
    }
}

let channel = new YoutubeChannel();

let user1 = new User("Alice");
let user2 = new User("Bob");

channel.subscribe(user1);
channel.subscribe(user2);

channel.notify("New video uploaded!");

channel.unsubscribe(user1);

channel.notify("Live stream starting now!");

// Factory Design Pattern Example
class Car {
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }

    info() {
        return `Car Model: ${this.model}, Color: ${this.color}`;
    }
}

class CarFactory {
    createCar(type, color) {
        switch (type) {
            case 'sedan':
                return new Car('Sedan', color);
            case 'suv':
                return new Car('SUV', color);
            case 'truck':
                return new Car('Truck', color);
            default:
                throw new Error('Unknown car type');
        }
    }
}

const factory = new CarFactory();

const sedan = factory.createCar('sedan', 'red');
console.log(sedan.info());

const suv = factory.createCar('suv', 'blue');
console.log(suv.info());

const truck = factory.createCar('truck', 'black');
console.log(truck.info());  

//Module Design Pattern Example
const Calculator = (function() {
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    return {
        add,
        subtract,
        multiply,
        divide
    };
})();

console.log(Calculator.add(5, 3));       // 8
console.log(Calculator.subtract(5, 3));  // 2
console.log(Calculator.multiply(5, 3));  // 15
console.log(Calculator.divide(5, 0));    // Error: Division by zero is not allowed. 

//Module Design pattern with reveal pattern
const Person = (function() {
    let name = '';
    let age = 0;

    function setName(newName) {
        name = newName;
    }

    function setAge(newAge) {
        age = newAge;
    }

    function getInfo() {
        return `Name: ${name}, Age: ${age}`;
    }

    return {
        setName,
        setAge,
        getInfo
    };
})();

Person.setName('John Doe');
Person.setAge(30);
console.log(Person.getInfo()); // Name: John Doe, Age: 30   


//Singleton Design Pattern Example
class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        this.connection = null;
        Database.instance = this;
    }

    connect(connectionString) {
        if (!this.connection) {
            this.connection = `Connected to database with ${connectionString}`;
        }
        return this.connection;
    }
}

const db1 = new Database();
console.log(db1.connect('Server=localhost;Database=myDB;'));

const db2 = new Database();
console.log(db2.connect('Server=remotehost;Database=otherDB;'));

console.log(db1 === db2); // true       


//Module vs Factory
// Module pattern is used to create a single instance with private and public members, while Factory pattern is used to create multiple instances of objects based on input parameters.

//Module pattern is best when you need a single instance with encapsulated state and behavior.
//Factory pattern is best when you need to create multiple instances of similar objects with different configurations.

//IIFE vs Arrow Functions
// IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined, often used to create a new scope and avoid polluting the global namespace.
// Arrow functions are a concise syntax for writing functions in JavaScript, providing lexical scoping for the 'this' keyword.

//IIFE is best when you want to create a new scope immediately, while arrow functions are best for shorter syntax and maintaining the context of 'this' in callbacks.   

