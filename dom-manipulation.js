// let abcd = document.getElementById("demo");
// let zyx = document.getElementsByClassName("abcd");

// console.log(zyx[0]);
// // zyx[0].hidden = true;
// zyx[0].style.backgroundColor = "red";
// console.log(zyx[0].style);
// console.log(abcd);
// abcd.innerHTML = "Hello World!";

// let h1 = document.createElement("h1");
// h1.innerHTML = "This is a new heading";

// document.body.append(h1);

// let input = document.querySelector("input");
// input.addEventListener("input", (val)=>{
//     // console.log(val.target.value);
//     // if (val.key === "Enter") {
//     //     console.log("Full name entered:", val.target.value);
//     // }
//     timeout = setTimeout(() => {
//         console.log("User finished typing:", val.target.value);
//         // console.log(val);
//     }, 1000); // run after 500ms of no typing
// })
// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function(event){
//     h1.textContent = event.key;
// })


let btn = document.querySelector("#btn");
let fileInp = document.querySelector("input");
let fileNameComming = document.querySelector("#fileNameComming");

btn.addEventListener("click", function(){
    fileInp.click();
});

fileInp.addEventListener("change", function(details){
    console.log(details);
    let fileName = fileInp.files[0].name;
    fileNameComming.textContent = fileName;
});

//Send above file on an api
// let formData = new FormData();
// formData.append("file", fileInp.files[0]);

// fetch("https://example.com/upload", {
//     method: "POST",
//     body: formData
// }).then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));           
