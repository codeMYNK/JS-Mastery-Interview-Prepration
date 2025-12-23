//Sepration Of Concern : It means to separate different functionalities of a program into distinct sections or modules. This helps in maintaining, understanding, and scaling the codebase effectively.
// script.js
// Demonstrates separation of concerns by dividing code into distinct modules.
// Usage: include this from an HTML file with: <script type="module" src="./script.js"></script>

const btn = document.querySelector("button");
const ul = document.querySelector("ul");

function add(n1, n2){
    return n1 + n2;
}

btn.addEventListener("click", function(){
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    const sum = add(num1, num2);

    const li = document.createElement("li");
    li.textContent = `${num1} + ${num2} = ${sum}`;
    ul.appendChild(li);
});