//Que: what is fetch API in JavaScript?
//Ans: The Fetch API in JavaScript is a modern interface that allows you to make network requests similar to XMLHttpRequest (XHR). It provides a more powerful and flexible way to fetch resources asynchronously across the network. The Fetch API uses Promises, making it easier to work with asynchronous operations.

//Example of Fetch API with Promises and Async/Await

// Simulated fetch functions using Promises

// fetch("https://randomuser.me/api/?results=50")
//     .then((rawData) => {
//         return rawData.json();
//     })
//     .then((data) => {
//         console.log("User Data:", data);
//     })
//     .catch((err) => {
//         console.log("Error fetching user data:", err);
//     })

// Example: Using document.createElement to dynamically build HTML
// const div = document.createElement("div");
// div.className = "my-class";
// div.textContent = "Hello World";
// document.body.appendChild(div);

fetch("https://randomuser.me/api/?results=2")
    .then((rawData) => rawData.json())
    .then((data) => {
        const user = data.results[0];
        const user2 = data.results[1];
        console.log("User Data:", data);
        
        // Using getElementById to fill existing elements
        document.getElementById("profileImg").src = user.picture.large;
        document.getElementById("profileImg2").src = user2.picture.large;
        document.getElementById("userName").textContent = `${user.name.first} ${user.name.last}`;
        document.getElementById("userName2").textContent = `${user2.name.first} ${user2.name.last}`;
        document.getElementById("userTitle").textContent = user.location.city;
        document.getElementById("userTitle2").textContent = user2.location.city;
        document.getElementById("userBio").textContent = `Email: ${user.email}`;
        document.getElementById("userBio2").textContent = `Email: ${user2.email}`;
        document.getElementById("followers").textContent = Math.floor(Math.random() * 5000);
        document.getElementById("followers2").textContent = Math.floor(Math.random() * 5000);
        document.getElementById("following").textContent = Math.floor(Math.random() * 2000);
        document.getElementById("following2").textContent = Math.floor(Math.random() * 2000);
        document.getElementById("posts").textContent = Math.floor(Math.random() * 500);
        document.getElementById("posts2").textContent = Math.floor(Math.random() * 500);
    })
    .catch((err) => {
        console.log("Error fetching user data:", err);
    });

// Adding event listener to refresh button
document.getElementById("refreshBtn").addEventListener("click", () => {
    location.reload();
});