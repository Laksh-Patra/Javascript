// var newElement=document.createElement("h2");

// var newText=document.createTextNode("This is text");

// newElement.appendChild(newText);
// var target=document.getElementById("target");

// target.insertAdjacentElement("beforebegin",newElement);

// var target=document.getElementById("target");
// var newElement="<h2>This is Heading</h2>";
// target.insertAdjacentHTML("afterend",newElement);

var target=document.getElementById("target");
var newtext="This is Heading";
target.insertAdjacentText("afterend",newtext);