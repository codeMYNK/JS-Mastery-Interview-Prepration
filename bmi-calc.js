//Que: Write a BMI Calculator

function bmi(weight, height){
    return weight / (height * height);
}

console.log("BMI is: " + (bmi(69, 1.75)).toFixed(2)); //Weight in kg, Height in meters