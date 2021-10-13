
/*This is a dictionary and we are calling at the bottom to show the breed
of the Species we chose to use in a text in html when you 
click on the click me */
function my_Dictionary() {
    let Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Goldendoodle",
        Age: 2,
        Sound: "Bark"
    };

document.getElementById("Dictionary").innerHTML = Animal.Breed;
}

// here we are deleting the color from our dictionary
delete Animal.Color;