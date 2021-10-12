function addition_Function() {
    var addition = 4 + 3;
    document.getElementById("Math").innerHTML = "4 + 3 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 4;
    document.getElementById("Math").innerHTML = "5 - 4 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 11 * 7;
    document.getElementById("Math").innerHTML = "11 * 7 = " + multiplication;
}

function division_Function() {
    var division = 27 / 3;
    document.getElementById("Math").innerHTML = "27 / 3 = " + division;
}

function more_Math() {
    var simple_Math = (4 + 3) * 10 / 2 - 3;
    document.getElementById("Math").innerHTML = "4 plus 3, multiplied by 10, divided in half and then subtracted by 3 equals " + simple_Math;
}

function modulus_Operator() {
    var modulus = 21 % 9;
    document.getElementById("Math").innerHTML = "When you divide 21 by 9 you have a remainder of: " + modulus
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

function negation_Operator() {
    var x = 10;
    var x = -10
    return x;
}

document.write("<br><br>")

// this is a var and the code below takes the 7 and adds 1 to it
let incrememnt = 7;
incrememnt++;
document.write(incrememnt);

// this will take the var above and subtract 1 from it
document.write("<br><br>")
incrememnt--;
document.write(incrememnt);

// this will make a random number between 0 and 77
window.alert(Math.random() * 77);

document.write("<br><br>")

// this takes the number and rounds it up to the nearest number
let round_Up = 354.785453;
document.write(Math.round(round_Up));