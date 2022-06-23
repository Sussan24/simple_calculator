
var a = prompt("Please enter first value:");
var sign  = prompt("Please sign:");
var b = prompt("Please enter second value:");



const c = parseInt(a);
const d = parseInt(b);



if (sign === "+") {
    
    sumx();

} else if (sign === "*") { 

    multx();
    
}else if (sign === "/") { 

    divx();
    
}
else {

    subx();
   
}



function sumx() {
    
   alert("Sum is : " + (c + d));
        
}





function multx() {
    
alert("Muliplication is :"+ (c * d));
}




function divx() {
    
alert("Division is :"+ (c / d));

}




function subx() {
    
alert("Subtraction is :"+ (c - d));

}


