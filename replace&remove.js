/*Replace Child */
// var newElement=document.createElement("li");
// var newText=document.createTextNode("WOW new Text");

// newElement.appendChild(newText);

// var target=document.getElementById("list");
// var oldElement=target.children[1];
// // console.log(oldElement);
// target.replaceChild(newElement,oldElement);


/* Remove Child */

var target=document.getElementById("list");
var oldElement=target.children[1];
// console.log(oldElement);
target.removeChild(oldElement);

