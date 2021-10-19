
/* this function has a method in here (concat) which takes all of these
variables and can connect them as seen in the wholeSentence var and then 
we have the html file display the setence once the button is clicked*/
function fullSentence() {
    let pt1 = "I love ";
    let pt2 = "skate";
    let pt3 = "boarding and ";
    let pt4 = "snowboarding.";
    let wholeSentence = pt1.concat(pt2, pt3, pt4);
    document.getElementById("Concatenate").innerHTML = wholeSentence;
}

/* This function has a method that will allow you to display a certain word
from the var below as shown in the Section var and it will print out coding
once the button is clicked that was made in the html file. (when counting 
you will need to include the spaces to get the correct word you want to print). */
function sliceMethod() {
    let Sentence = "My entire day consits of coding and working.";
    let Section = Sentence.slice(25, 32);
    document.getElementById("slice").innerHTML = Section;
}

// here we use a string method to make the whole text show up in upper case letters
let str = "this is all originally lower case but I am gonna make it upper case<br><br>";

document.write(str.toUpperCase());

// here we use a search string method which is used to search for a specific string or regular expression
let str1 = "Visit Canadianfaller7.github.io";

document.write(str1.search("Canadianfaller7.github.io"));

// this takes the var of a number and converts it to a string datatype
// this is used usually first but only if you think or know the datatype is already string
function stringMethod() {
    var x = 77;
    document.getElementById("numbersToString").innerHTML = x.toString();
}

// this takes the number in the var and by using this precision method it will shorten the number to the exact length we want
function precisionMethod() {
    var y = 777.6445689871356548923654853;
    document.getElementById("Precision").innerHTML = y.toPrecision(7);
}

// this should take the number datatype and convert it into string datatype as well
// valueof is usually used only if you know the thing is a different datatype and you want it to be a string value
function valueOfMethod() {
    var a = 77;
    document.getElementById("Value").innerHTML = a.valueOf();
}

// this will take the number and round it up for you and then convert it to a string datatype
function toFixedMethod() {
    var b = 77.546543;
    document.getElementById("Fixed").innerHTML = b.toFixed();
}