// ELEMENT SELECTOR = Method used to target and manipulate HTML elements.
//                    They allow you to select one or more multiple HTML elements.
//                    From the DOM (Document Object MOdel)

// 1. document.getELementById()  // ELEMENT OR NULL
// 2. document.getElementsClassName()   // HTML COLLECTION
// 3. document.getElementsByTagName()  //HTML COLLECTION
// 4. document.querySelector()   //ELEMENT OR NULL
// 5. document.querySelectorAll()   // NODELIST

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "green";
myHeading.style.textAlign = "center";

console.log(myHeading);