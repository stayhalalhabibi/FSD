// how to accept user input

// 1. Easy way = window prompt 
// 2. PROFESSIONAL way = HTML form input field

/*let username;

username = window.prompt("Enter your name: ");
console.log(`Your name is : ${username}`);
*/

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(`Your name is : ${username}`);
}