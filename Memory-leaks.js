//Memory Leaks: Common Causes and Prevention Strategies

//1. Unintended Global Variables
function createGlobalVariable() {
    globalVar = "I am a global variable"; // Missing 'var', 'let', or 'const'
}
createGlobalVariable();
console.log(globalVar); // Accessible globally, can lead to memory leaks

//Prevention: Always declare variables with 'var', 'let', or 'const'
function createLocalVariable() {
    let localVar = "I am a local variable";
    console.log(localVar);
}
createLocalVariable();
// console.log(localVar); // This will throw an error

//2. Forgotten Timers or Intervals
let intervalId = setInterval(() => {
    console.log("This runs every second");
}, 1000);

//Prevention: Clear intervals when they are no longer needed
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared");
}, 5000);

//3. Detached DOM Nodes
function createDetachedNode() {
    let div = document.createElement("div");
    div.innerHTML = "I am a detached node";
    // Not appending to the DOM, but still referenced
    return div;
}

let detachedNode = createDetachedNode();
// detachedNode is still in memory even though it's not in the DOM

//Prevention: Remove references to detached nodes when done
detachedNode = null; // Now eligible for garbage collection

//4. Closures Holding References
function outerFunction() {
    let largeObject = new Array(1000000).fill("This is a large object");

    return function innerFunction() {
        console.log(largeObject.length);
    };
}

let closureFunction = outerFunction();
// largeObject remains in memory because innerFunction holds a reference to it

//Prevention: Avoid unnecessary closures or nullify references when done
closureFunction = null; // Now eligible for garbage collection      
//5. Event Listeners Not Removed
function addEventListenerExample() {
    const button = document.getElementById("myButton");
    
    function handleClick() {
        console.log("Button clicked");
    }       
    button.addEventListener("click", handleClick);

    //Prevention: Remove event listeners when they are no longer needed
    return function removeListener() {
        button.removeEventListener("click", handleClick);
        console.log("Event listener removed");
    };
}

const removeClickListener = addEventListenerExample();

// Simulate removing the listener after some time
setTimeout(() => {
    removeClickListener();
}, 10000);

//6. Using Intersection Observer Without Unobserving
// Select only images meant for lazy-loading (have `data-src`)
let imgs = document.querySelectorAll(".lazy-image");

// Options control when the observer callback runs:
// - `root: null` -> viewport
// - `rootMargin` -> start loading slightly before image enters viewport (200px)
// - `threshold: 0.1` -> callback when ~10% of the image is visible
const observerOptions = {
    root: null,
    rootMargin: "0px 0px 200px 0px",
    threshold: 0.1
};

// Create observer: when an observed element intersects, this callback runs
const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry){
        // `isIntersecting` is true when the element is inside the root area
        if(entry.isIntersecting){
            const img = entry.target; // the <img> element that intersected
            
            // The real image URL is stored in
            // `data-src` to avoid loading it until we actually need it. Only set `src` if `data-src` exists.
            const dataSrc = img.dataset.src;
            if(dataSrc){
                img.src = dataSrc; // start loading the real image
            }
            
            // We no longer need to observe this image after we've started loading it
            observer.unobserve(img);
        }
    });
}, observerOptions);

// Begin observing each lazy image so the callback can load them when needed
imgs.forEach(function(img){
    observer.observe(img);
});         

//Prevention: Always unobserve elements when they are no longer needed to prevent memory leaks
// (This is already handled in the above code with observer.unobserve(img);)


//Timers and Event Listners should be cleaned up when no longer needed to prevent memory leaks.
// Detached DOM nodes and closures should be nullified when they are no longer needed.
// Always declare variables properly to avoid unintended global variables.

//Example memory Leaks in Timers and Event Listners
let interval = setInterval(() => {
    console.log("Interval running");
}, 1000);

const button = document.getElementById("leakButton");
function handleClick() {
    console.log("Button clicked");
}
button.addEventListener("click", handleClick);

//Prevention: Clean up when no longer needed
setTimeout(() => {
    clearInterval(interval);
    button.removeEventListener("click", handleClick);
    console.log("Cleaned up interval and event listener");
}, 10000);  

