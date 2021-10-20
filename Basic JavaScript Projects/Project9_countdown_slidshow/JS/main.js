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

let slideIndex = 0;
showSlides(slideIndex);

// Next/Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

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