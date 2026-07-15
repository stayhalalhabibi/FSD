// DOM NAVIGATION = The process of navigating through the structure.
//                  of an HTML doc using JS.


// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// --------- .firstElementChild --------


const element = document.getElementById("veg");  // fruits/veg/desserts etc
const firstchild = element.firstElementChild;
firstchild.style.backgroundColor = "yellow";