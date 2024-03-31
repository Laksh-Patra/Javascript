
var newElement=document.createElement("h2");
var newText=document.createTextNode("This is practice");

// var newComment=document.createComment("This is comment");

newElement.appendChild(newText);
// document.getElementById("id").appendChild(newElement);
var target=document.getElementById("id");
target.insertBefore(newElement,target.childNodes[0]);

console.log(newElement);
// console.log(newText);
// console.log(newComment);