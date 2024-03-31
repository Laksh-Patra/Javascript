var element;


document.getElementById("text").addEventListener("click",abc);

function abc(){
//  document.getElementById("text").classList.add("xyz"); 
//document.getElementById("text").classList.remove("xyz","lkj"); 
// element =document.getElementById("text").classList.length;
// element =document.getElementById("text").classList.toggle("xyz");
// element =document.getElementById("text").classList.item(2);
element =document.getElementById("text").classList.contains("xpp");





console.log(element); 
}