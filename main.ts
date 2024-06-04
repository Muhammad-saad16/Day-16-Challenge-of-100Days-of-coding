//            🚀 Day 16 Challenge: Start Coding! 🚀

//Question 46:
// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe()
// that logs a sentence about the laptop.

let laptops = {
    make: "Dell",
    model: "xyz12",
    year: 2020,
    describe: function() {
        console.log(` This Laptop is a ${this.make} ${this.model} ${this.year}.`);
    }
};

laptops.describe(); // Answer :  This Laptop is a Dell xyz12 2020.


// Question 47:
// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, 
//use array destructuring to assign the first and second laptops to variables. Then, log these variables.


let laptop = [
    { make: "Dell", model: "XPS 15", year: 2020 },
    { make: "Hp", model: "Spectre", year: 2021 },
    { make: "Apple", model: "MacBook Pro2", year: 2022 }
];
let [laptop1, laptop2, laptop3] = laptop;
console.log(laptop1);
console.log(laptop2);

console.log(laptop3); //for my try not in question
console.log(laptop); //for my try not in question


// Question 48:
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to 
// combine these arrays into a single array sorted in ascending order, then log the result.

let pricesSet1 = [800, 1200, 1500];
let pricesSet2 = [500, 1100, 1000];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);

console.log(combinedPrices);
