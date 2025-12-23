//Que: What is debouncing?
//Ans: Debouncing is a programming technique used to limit the rate at which a function is executed. It ensures that a function is only called after a certain period of inactivity, preventing it from being triggered multiple times in quick succession. This is particularly useful for optimizing performance in scenarios like handling user input events (e.g., key presses, window resizing) where frequent calls can lead to excessive processing.

// decouncing -> app koi action kr rahe ho and app ye nahi cahate har action pe kuchh ho, jab bhi mere actions ke beech mai koi specific gap aajaye to fir reaction perform ho

function debounce(fnc, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fnc(...args);
    }, delay);
  };
}

document.querySelector("input").addEventListener(
  "input",
  debounce(function (details) {
    console.log("data in details entered in input: ", details.data);
  }, 1000)
);

// Example of Debouncing
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage
const handleResize = debounce(() => {
  console.log("Window resized");
}, 300);

window.addEventListener("resize", handleResize);

//Que: What is throttling?
//Ans: Throttling is a programming technique used to control the rate at which a function is executed over time. Unlike debouncing, which delays execution until a period of inactivity, throttling ensures that a function is called at most once in a specified time interval. This is useful for scenarios where you want to limit the frequency of function calls, such as scrolling events or mouse movements, to improve performance and reduce resource consumption.

//Throttling-> app koi action kr rahe ho and app ye cahate ho ki har specific time interval ke baad hi reaction perform ho, chahe kitne bhi actions ho jaye us time interval ke andar

//debounce->Ek delay bataaoge tum utne delay jab bhi aayega action ka reaction melega

//Throttle-> interval par chalunga, action agar hota raha and aapne ek interval bataya to utne interval mai apka event chalega

function throtttle(fnc, delay) {
  let timer = 0;
  return function (...args) {
    let now = Date.now();
    if (now - timer >= delay) {
      timer = now;
      fnc(...args);
    }
  };
}

document.querySelector("input").addEventListener(
  "input",
  throtttle(function (details) {
    console.log("Throttling Example data in details entered in input: ", details.data);
  }, 1000)
);


// Example of Throttling
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Usage
const handleScroll = throttle(() => {
  console.log("Scrolled");
}, 200);

window.addEventListener("scroll", handleScroll);

//In summary, debouncing delays function execution until a period of inactivity, while throttling limits the frequency of function calls to a specified interval. Both techniques are valuable for optimizing performance in event-driven scenarios.
