/* Here we are making a switch statement which is sort of like an if else
statement. Here we create a blank var and then we assign the trick var to the 
value of the trick the user types in, and then we create a var that has a string
we will attach later like you will see below. Then we make the switch statment
by putting in the Trick var inside the brackets and then we use the case keyword
which is like saying in the case they put this string in then print this full
statment so for example, they say "Kickflip" then the print would be "kickflip
+ the string we made stored in the trickString var, but this is all just saying
in the case, they choose one of the cases, something different could happen if
we made it that way.*/
function trickFunction() {
    let trickOutput;
    let Trick = document.getElementById("trickInput").value;
    let trickString = " is a dope trick!";
    switch(Trick) {
        case "Kickflip":
            trickOutput = "Kickflip" + trickString;
        break;
        case "Heelflip":
            trickOutput = "Heelflip" + trickString;
        break;
        case "Tre-flip":
            trickOutput = "Tre-flip" + trickString;
        break;
        case "Laser-flip":
            trickOutput = "Laser-flip" + trickString;
        break;
        case "Backside-flip":
            trickOutput = "Backside-flip" + trickString;
        break;
        case "Back-heel":
            trickOutput = "Back-heel" + trickString;
        break;
        case "Frontside-flip":
            trickOutput = "Frontside-flip" + trickString;
        break;
        case "Back-Crook":
            trickOutput = "Back-Crook" + trickString;
        break;
        case "Front-Tail":
            trickOutput = "Front-Tail" + trickString;
        break;
        case "Back-Smith":
            trickOutput = "Back-Smith" + trickString;
        break;
        default:
            trickOutput = "Please enter a trick exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = trickOutput;
}

/* Here we are implementing the get element by class and so we create a var
that is equal to our h1 and h1 click and then we drop down and do the var
with array 0 and then when the button is clicked the text from the h1 in html
text will change. If we change the 0 to 1 then it will change the h2 text */
function helloWorldFunction() {
    let A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

/* Here we are creating a graphic with JavaScript that is a text inside our
canvas tag in html(canvas tag is what makes the black border)*/
let drawingOne = document.getElementById("idNameOne");
let ctxOne = drawingOne.getContext("2d");
ctxOne.font = "30px Comis Sans MS";
ctxOne.textAlign = "center";
ctxOne.strokeText("I love programming!", drawingOne.width/2, drawingOne.height/2);

/* Here we are creating a graphic with JavaScript that is a linear gradiente
that is rainbow colored and can be sized to fit the rest of the rectangel if 
we want. We can look up more of the meanings of the terms here on w3school 
by looking up the html canvas stuff.*/
let drawingTwo = document.getElementById("idNameTwo");
let ctxTwo = drawingTwo.getContext("2d");

// this is what creates the gradient
let grd = ctxTwo.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop("0.3", "magenta");
grd.addColorStop("0.5", "blue");
grd.addColorStop("0.6", "green");
grd.addColorStop("0.8", "yellow");
grd.addColorStop(1, "red");

// this is is to fill the gradient
ctxTwo.fillStyle = grd;
ctxTwo.fillRect(20,20,150,100);