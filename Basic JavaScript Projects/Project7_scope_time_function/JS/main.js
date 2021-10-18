
/* This is going to be a global scope, which means that the var
is on the outside of the function and so any function can gain
access to the var and use it. */

let X = 7;

function add_Numbers_1() {
    document.write(70 + X + "<br>");
}

function add_Number_2() {
    document.write(10 + X + "<br>");
}

add_Numbers_1();
add_Number_2();

/* Here we are using a local scope which means the var is 
defined inside the function and so it can only be used inside
said function. We then use console.log on the second function
to find out why it didn't show up on the html file and then
open dev tools and look inside the console and then it will
give us the error stating that Y isn't defined. */

function add_Numbers_3() {
    let Y = 7;
    document.write(20 + Y + "<br>");
}

function add_Number_4() {
    console.log(10 + Y);
}

add_Numbers_3();
add_Number_4();

/* Here we created a function that contains an if else statement.
the new Date.gethours will get the current date and time for your location
and then will print how is your day? if it is not yet 6pm(18) else if it is
past (18)6pm then it will ask how your night is?*/

function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How is your day going?";
    } else {
        document.getElementById("Greeting").innerHTML = "How is your night going?";
    }
}

/* Here we will make an If else statement which is saying if 
the var has an amount put in higher or equal to 10 then write
the statement below the if, but if it is less than 10, then print
the text below the else.*/

function getBlueberryCount() {
    let blueberryCount = 9

    if (blueberryCount >= 10) {
    document.getElementById("Blueberry").innerHTML = "Your order has been placed!";
    }   else {
    document.getElementById("Blueberry").innerHTML = "Sorry, we do not ship orders that small.";
    }
}

/* Here we are making a function that will take the age entered in the html file and turn
it into a variable and then we will use that variable to make an if else statement saying
if the age entered is greater than or equal to 18 print you can vote, but if it is below
18 then print you can't vote */
function ageFunction() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    } else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("howOldAreYou?").innerHTML = Vote;
}

/* Here we made a function that will tell us if it is morning time, afternoon, or evening.
It does that by taking this variable with the Date.getHours and will get the current time, and
we then do an if statement saying if the time is less than 12pm and greater than 0 then it is 
morning, but if the time is greater than or equal to 12pm but less than 6pm it is afternoon, but
if the time is anything beyong 6pm(18) it will tell us it is evening. */
function timeFunction() {
    let Time = new Date().getHours();
    let Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("timeOfDay").innerHTML = Reply;
}

