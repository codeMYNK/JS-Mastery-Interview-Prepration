function discountCalculator(discount){
    return function(price){
        return price - (price * discount / 100);
    }
}

let ten = discountCalculator(10); //10% discount
let twenty = discountCalculator(20); //20% discount

console.log("Price after 10% discount on 200: " + ten(200));
console.log("Price after 20% discount on 200: " + twenty(200));
// console.log(discounter(200));