// DOM = DOCUMENT OBJCT MODEL

//       OBJECT{}  that represents the page you see in the web browser 
//       and provides you with    an APIs to interact with it.
//       web browser constructs the DOM when it loads an HTML doc,
//       and stuctures all the elements in a tree-like representation.
//       JS can access the DOM to dynamically
//       change the contents, structure , and style of a web page.   



const username = "";
const salamMsg = document.getElementById("salam-Msg");

salamMsg.textContent += username === "" ? `Guest` : username;

