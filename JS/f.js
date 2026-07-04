// Function = A section of reusable code.
// declared code once, use it whenever you want
// call the function to execute that code

function happyBirthday(username, age) {
    console.log("Happy Birthday to you");
    console.log("Happy Birthday to you");
    console.log(`Happy Birthday dear ${username} friend`);
    console.log("Happy Birthday to you");
    console.log(`you are ${age} years old now`);
}

happyBirthday("sharif", 21); // calling the function to execute the code inside it
happyBirthday("saim", 22); // calling the function to execute the code inside it
happyBirthday("waquar ali", 23); // calling the function to execute the code inside it

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}
let sum = add(2, 3); // calling the function to execute the code inside it
console.log(sum);

function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 3));

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}
console.log(divide(10, 2));
console.log(divide(10, 0));

function subtract(num1, num2) {
    return num1 - num2;
}
console.log(subtract(10, 15));