// let tm = setTimeout(function(){
//     console.log("5 seconds have passed");
// }, 5000);

// let timePassed = 0;
// let intervalId = setInterval(function(){
//     timePassed += 5;
//     // console.log("This message is shown every 5 seconds");
//     console.log(timePassed + " seconds have passed");
//     if(timePassed >= 20){
//         console.log("20 seconds reached, stopping interval");
//         clearInterval(intervalId);
//     }
// }, 5000);

// clearTimeout(tm);

let count = 0;
let progressBar = document.getElementById("progress-bar");
let percentageNo = document.querySelector("#percentText");

setInterval(function(){
    if(count <=99){
        count++;
        // console.log(count);
        progressBar.style.width = count + "%";
        percentageNo.innerText = count + "%";
    }
}, 30)