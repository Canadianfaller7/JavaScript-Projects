
/* this is a while loop(which means it will continue to execute the 
    statement while the conditional(if statement basically) is true ) */

function callLoop() {
    let digit = "";
    let X = 1;
    while (X < 18) {
        digit += "<br>" + X;
        X++
    }
    document.getElementById("loop").innerHTML = digit;
}

/* Here we are taking a string and finding out how many characters are 
in it by using the .length method as show below */
let str = "I will count how many characters are in this string using the length method";

    document.write(str + ", and there are " + str.length + " characters total in the string");

/* Here we are creating an array(list) of instruments and then creating some 
blank var's to use later.

Then we have a for loop. The for loop is saying that Y equals 0 and that if
Y is less than the length of the array to add 1 to it, and then we take content
and say add value of the number from the array that is now Y and show us the value
(the string printed inside the array) when you click the button created in html*/
let instruments = ["Guitar", "Drums", "Piano", "Banjo", "Bass", "Violin", "Trumpet"];
let content = "";
let Y;

function forLoop() {

    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>"
    }
    document.getElementById("listOfInstruments").innerHTML = content;

}

/* Here is an array function where we make an array(made 2 ways how to make 
an array) and then we call it down at the bottom by doing this for example
(thingsILove[1]) which is should print coding when the button is clicked from
our html file and the array */
function arrayFunction() {
   /* let thingsILove = ["My Wife", "Coding", "Our dogs", "Skateboarding", "Snowboarding", "Badminton", "PickleBall"];
    document.getElementById("Array").innerHTML = "The thing I love the most is " + thingsILove[0] + "."; */

    let thingsILove = [];
    thingsILove[0] = "My Wife";
    thingsILove[1] = "Coding";
    thingsILove[2] = "Our dogs";
    thingsILove[3] = "Skateboarding";
    thingsILove[4] = "Snowboarding";
    document.getElementById("Array").innerHTML = "The thing I love the most is " + thingsILove[0] + ".";
}

/* Here we created a function that took a constant object and then we changed
a few of the object properties and added a new property to the object and then
executed the object in the code by clicking the button made in html. */
function skateboardConstantFunc() {
    const skateboards = {type: "Creature vx", brand: "Creature", size: 8.65};
    skateboards.brand = "Real";
    skateboards.type = "Heavyweight";
    skateboards.price = "$55"
    document.getElementById("Constant").innerHTML = "The skateboard I like to ride is a " +skateboards.brand+ ", " + skateboards.type + ", and it costs " + skateboards.price + " to buy.";
}

/* Here we are using te return keyword to return the numbers we passed in at
the bottom inside the document information */
function returnFunction(n1, n2) {
    return n1 + n2
} 
document.getElementById("Return").innerHTML = returnFunction(7,10);

let car = {
    make: "Honda ",
    model: "Civic TypeR ",
    year: "2021 ",
    color: "White ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("carObject").innerHTML = car.description();

/* Here we are using the continue statmenet which means that when we create
the loop and get to the if statement we are saying if i is equal to the 3 
because of the 3 equal signs then to skip 3 and then continue the loop all
the way till we hit 9 and then it will exit the loop */
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {continue;}
    text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;

/* Here we are using the break statmenet which means that when we create
the loop and get to the if statement we are saying if i is equal to the 3 
because of the 3 equal signs then we will just exit the entire loop and it 
will only print 0-2 */
let stringText = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {break;}
    stringText += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = stringText;






