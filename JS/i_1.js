//  ARRAY = A variable like structure that can hold multiple values in a single variable. It is a collection of elements, each identified by an index or key. Arrays are commonly used in programming to store lists of data, such as numbers, strings, or objects. In JavaScript, arrays can be created using square brackets [] and can hold elements of different data types.

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// fruits.push("fig"); // Adds "fig" to the end of the array
//fruits.pop(); // Removes the last element from the array
//fruits.unshift("grape"); // Adds "grape" to the beginning of the array
// fruits.shift(); // Removes the first element from the array

let numOfFruits = fruits.length; // Get the number of elements in the array
let index = fruits.indexOf("cherry"); // Get the index of "cherry" in the array

console.log("Number of fruits:", numOfFruits);
console.log("Index of cherry:", index);
