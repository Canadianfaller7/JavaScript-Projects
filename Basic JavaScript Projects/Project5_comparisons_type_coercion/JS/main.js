
// this will print that this is a string because of the key word "typeof"
document.write(typeof "Word");

// this will print NaN(not a number) because 0 divided by 0 isn't anything
function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
}

// this will print true because the text inside is a string and not a number
function my_Function1() {
    document.getElementById("Test1").innerHTML = isNaN('This is not a number');
}

// this will print false because the statement is a number
function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('007');
}

// this will show Infinity because is is 2 ^ 310 power
function my_Infinity_Function() {
    document.getElementById("infinity").innerHTML = (2E310);
}

// this will show -Infinity because it is -3 ^ 310 power
function my_NegativeInfinity_Function() {
    document.getElementById("negative infinity").innerHTML = (-3E310);
}
document.write("<br>");
document.write(7<17);
document.write("<br>");
document.write(3<2);

// if you open devTools and go to console you will see what this prints
console.log(5 + 2);
// this boolean should print false
console.log(4>75);
document.write("<br>");
// this is asking if something is euqal to the other and then telling 
// if true or false
document.write(7 == 17);
document.write("<br>");
// this one is true
document.write(7 == 7);

document.write("<br>");

// here we made 2 variables
let X = "Skate";
let L = "Skate";
// we compare variables to see if they are the same Data type and Value
// if they are then we will get true printed.
document.write(X === L);

document.write("<br>");
// this one is false for different values and data types 
let A = "apple";
let B = 4;

document.write(A === B);

document.write("<br>");
// this one is false because it has different data types
let C = "four";
let D = 4;

document.write(C === D);

document.write("<br>");
// this is false because it has different values
let E = 7;
let F = 4;

document.write(E === F);

document.write("<br>");
// this && is making sure both statements are true and if they are
// then it will print true
document.write(7< 10 && 10> 6);

document.write("<br>");
// this will print false cause 7 isn't greater than 10
document.write(7 > 10 && 10> 6);

document.write("<br>");
// this || is saying if either or statment is true then the 
// overall statment is true
document.write(7< 10 || 10 < 6);

document.write("<br>");
// this will print false because both statments are false
document.write(7 > 10 || 10 < 6);

// this is gonna print true because 5 is not greater than 10
function not_Function() {
    document.getElementById("not").innerHTML = !(5 > 10);
}
// this will print false because because it is saying 5 is not less 
// than 10 but it is less than 10
function not_Function1() {
    document.getElementById('not1').innerHTML = !(5 < 10);
}