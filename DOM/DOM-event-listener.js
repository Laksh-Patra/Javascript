var element;
// document.querySelector("#text").onmouseenter=ec;

// function ec(){
//     element=document.querySelector("#text");
//     element.style.fontWeight="bold";

// }

//Add event listener

document.getElementById("text").addEventListener("click",abc);
document.getElementById("text").addEventListener("click",function(){

    document.getElementById("text").style.border="10px solid yellow";
    this.style.fontWeight="bold";
    
}); 
function abc(){
 document.getElementById("text").style.background="green"; 
 
}

console.log(element);