/* here we are creating a function that takes the input value the user puts in 
on the html file and will bring it here and convert it into a timer. We then 
create another function inside to take the seconds inputed and to minus 1 from 
it to show it counting down. Then we use an if statement saying if the time is
less = to -1, pop up an alert stating time's up and then it is saying to clear
the time with the clearTimeout set with the setTimeout and then show nothing.
We then call the tick function near the bottom which is within the countdown funcion*/
function countdown() {
    let seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        let time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

// Slide Show //

// this will let us display the first image within the array
let slideIndex = 0;
showSlides(slideIndex);

// Next/Previous controls

// this lets us move to the next image in the array
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls

// this is basically saying what we got from the above functions equals the 
// current slide we will be on
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* this will be part of the actual slide show. We make var i blank so we can
then use it later on.

We set slides and dots equal the class names in the html file.

We use an if statement saying if n is less than the total slide length then
the slide should equal 1.

Then we do a loop saying if i equals 0 and i is less than the slide length
add 1 and change the slide, and under the loop we are saying to show 
nothing until you click the arrow keys.

The next for loop is saying if the i is less than the number of dots,
activate the next dot and then deactivate the previous dot, so it shows you
are on a new slide frame */

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}