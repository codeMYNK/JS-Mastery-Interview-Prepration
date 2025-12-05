let obj = {
    name: "Mayank",
    age: 24,
    city: "New Delhi"
};

console.log(obj.name); // Accessing property using dot notation
console.log(obj['age']); // Accessing property using bracket notation

// not notation vs bracket notation diffrence
// Dot notation cannot be used with keys that have spaces or special characters
// Bracket notation can be used with any string as a key

let obj2 = {
    name: "harsh",
    age: 26,
    khaana: "daal chawal",
};
let aa = "name";
console.log(obj2.aa); // undefined
console.log(obj2[aa]); // "harsh"

// Modifying properties
obj.age = 25;
obj['city'] = "Mumbai";

console.log(obj);

// Adding new properties
obj.country = "India";
obj['profession'] = "Developer";

console.log(obj);

// Deleting properties
delete obj.profession;
delete obj['country'];

console.log(obj);

// Iterating over properties
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// Checking if a property exists
console.log('name' in obj); // true
console.log('profession' in obj); // false

// Getting all keys and values
let keys = Object.keys(obj);
let values = Object.values(obj);

console.log(keys);
console.log(values);

//Nested Objects  and deep access
let nestedObj = {
    person: {
        name: "Ankit",
        address: {
            street: "123 Main St",
            city: "Delhi"
        }
    }
};

console.log(nestedObj.person.name); // "Ankit"
console.log(nestedObj.person.address.city); // "Delhi"

// Modifying nested properties
nestedObj.person.address.city = "Mumbai";
console.log(nestedObj.person.address.city); // "Mumbai"

// Adding nested properties
nestedObj.person.address.zip = "110001";
console.log(nestedObj.person.address);

// Deleting nested properties
delete nestedObj.person.address.street;
console.log(nestedObj.person.address);

// Iterating over nested properties
for (let key in nestedObj.person.address) {
    console.log(`${key}: ${nestedObj.person.address[key]}`);
}

// Checking if a nested property exists
console.log('zip' in nestedObj.person.address); // true
console.log('street' in nestedObj.person.address); // false

// Getting all keys and values of nested object
let nestedKeys = Object.keys(nestedObj.person.address);
let nestedValues = Object.values(nestedObj.person.address);

console.log(nestedKeys);
console.log(nestedValues);

//object Destructuring
let { name, age, city } = obj;
console.log(name); // "Mayank"
console.log(age); // 25
console.log(city); // "Mumbai"

// Nested object destructuring
let { person: { name: personName, address: { city: personCity } } } = nestedObj;
console.log(personName); // "Ankit"
console.log(personCity); // "Mumbai"

// Rest operator in destructuring
let { name: n, ...rest } = obj;
console.log(n); // "Mayank"
console.log(rest); // { age: 25, city: "Mumbai" }

//deep copy nested object
let deepCopy = JSON.parse(JSON.stringify(nestedObj));
deepCopy.person.address.city = "Chennai";
console.log(nestedObj.person.address.city); // "Mumbai"
console.log(deepCopy.person.address.city); // "Chennai"

// object.entries()
let entries = Object.entries(obj);
console.log(entries); // [ ['name', 'Mayank'], ['age', 25], ['city', 'Mumbai'] ]

// object.fromEntries()
let newObj = Object.fromEntries(entries);
console.log(newObj); // { name: 'Mayank', age: 25, city: 'Mumbai' }

// Object.freeze()
Object.freeze(obj);
obj.age = 30; // This will not change the age property
console.log(obj.age); // 25

// Object.seal()
Object.seal(nestedObj);
nestedObj.person.name = "Ravi"; // This will change the name property
delete nestedObj.person.address; // This will not delete the address property
console.log(nestedObj.person.name); // "Ravi"
console.log(nestedObj.person.address); // { street: '123 Main St', city: 'Mumbai', zip: '110001' }

// Object.assign()
let copyObj = Object.assign({}, obj);
console.log(copyObj); // { name: 'Mayank', age: 25, city: 'Mumbai' }

// Merging objects
let additionalInfo = {
    profession: "Engineer",
    country: "India"
};
let mergedObj = Object.assign({}, obj, additionalInfo);
console.log(mergedObj); // { name: 'Mayank', age: 25, city: 'Mumbai', profession: 'Engineer', country: 'India' }

// Object.hasOwn()
console.log(Object.hasOwn(obj, 'name')); // true
console.log(Object.hasOwn(obj, 'profession')); // false     