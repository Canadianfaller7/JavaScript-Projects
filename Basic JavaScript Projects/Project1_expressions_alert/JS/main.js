/* This is a way you can write a text*/
document.write('Hello World! ');

/* the br is a break just like in html

let is also the way to make a changable variable or you can

use const for a constant variable(non changable variable)*/
let A = "This is a string \<br>";

document.write(A);

/* By adding the \ it allows up to add a ' to the text like (it's) */
document.write("\<br>Let\'s go outside and skateboard if the weather is good"

+ ", but if the weather isn\'t good then we can just stay inside.\<br>");

let B = "This is a variable holding a string value";

//This will set up an alert message when you open up the page
window.alert(B);

let C = "\<br>Here I am combinging this text" +

" with this text using a \"+\" sign\<br>\<br>";

document.write(C);

//This is multiple vars in one line of code and you can call any 
//of them in the document.write() 
let D = "Weather types:", S = "Summer",

F = "Fall", SP = "Spring", W = "Winter";

document.write(S);

var purple = "\<br>\<br>This will be written in purple\<br>\<br>";

var purple = purple.fontcolor("purple");

document.write(purple);

// This is a staement(document.write) that contains an expression(4 + 3)
document.write(4 + 3)

// This function will let us get the current date and time which will
//be called in the HTML file.
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

document.write("<br><br>");
var One_String = "This string will be printed";
var Two_String = " with this string even though they are from different variables.";
var Complete_String = One_String + Two_String;
document.write(Complete_String);
