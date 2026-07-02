// Variable = A container that stores a value.
//            Behaves as if it were the value it contact

// 1. declaration    let x;
// 2. assignment     x = 100;

let x;
x = 10;

console.log(x);

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(`your age ${age} years old`);
console.log(`price: $${price.toFixed(2)}`);
console.log(`your GPA is : ${gpa}`);


console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);

let isApproved = true;
console.log(isApproved);
console.log(typeof isApproved);

let firstName = "Sharifur";
let lastName = "Rahman";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log(typeof fullName);


let selectedColor = null;
console.log(selectedColor);
console.log(typeof selectedColor);

let selectedColor2;
console.log(selectedColor2);
console.log(typeof selectedColor2);

let fn= "sharifur rahman";
let age2 = 26;
console.log(`Name: ${fn}, Age: ${age2}`);
let student = true;
console.log(`Name: ${fn}, Age: ${age2}, Student: ${student}`);

document.getElementById("p1").textContent = ` Your Name is : ${fn}`;
document.getElementById("p2").textContent = ` Your Age is : ${age2}`;
document.getElementById("p3").textContent = ` You are a Student: ${student}`;
