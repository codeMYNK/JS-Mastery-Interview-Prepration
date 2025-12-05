// localStorage
//Can't store array, object etc in localStorage directly. They need to be converted to string using JSON.stringify() before storing and parsed back using JSON.parse() when retrieving.
// Set item
localStorage.setItem('name', 'Mayank Kumar');
localStorage.setItem('age', '25');

//Update item
localStorage.setItem('name', 'Mayank K.');

// Get item
const namee = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(`Name: ${namee}, Age: ${age}`);

// Remove item
localStorage.removeItem('age');

// Clear all items
localStorage.clear();

// sessionStorage
// Set item
sessionStorage.setItem('sessionName', 'Session Mayank');
sessionStorage.setItem('sessionAge', '30');

// Get item
const sessionName = sessionStorage.getItem('sessionName');
const sessionAge = sessionStorage.getItem('sessionAge');
console.log(`Session Name: ${sessionName}, Session Age: ${sessionAge}`);

// Remove item
sessionStorage.removeItem('sessionAge');

// Clear all items
sessionStorage.clear();


//Cookies
// Set cookie   
document.cookie = "age=28"

// Get cookie
const cookies = document.cookie;
console.log(`Cookies: ${cookies}`);

// Update cookie
document.cookie = "age=29"

// Delete cookie by setting its expiration date to a past date
document.cookie = "age=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// Get cookies after deletion
const updatedCookies = document.cookie;
console.log(`Updated Cookies: ${updatedCookies}`);
// Note: Cookies are limited in size and should not be used to store large amounts of data.
