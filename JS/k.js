// SPREAD OPERATTORS = .. ALLOWS AN ITERABLE SUCH AS AN 
//                     array or string to be expended 
//                     into seperate elements
//                     (unpacks the element).

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);