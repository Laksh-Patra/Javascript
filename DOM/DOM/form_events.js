// function focusFunction(){
//    var a= document.getElementById("fname").style.background = "red";
   
    
// }

function focusFunction(element){
    element.style.background = "red";
    
     
 }
 function blurFunction(element){
    element.style.background = "";
    
     
 }
 function inputFunction(element){
    var x=element.value;
    document.getElementById("test").innerHTML= x;
 }
