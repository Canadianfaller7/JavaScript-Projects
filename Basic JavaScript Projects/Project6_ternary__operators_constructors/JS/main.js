/* This function has a var that creates 2 variables where the 
height gets the ID and value from the html file and plugs it in here.
If the Height value the user puts in is less than 52 we use a Ternary(?)
to determine if they should be told they are too short or if they are 
tall enough. Depending on their height and if it is greater or less than 
52cm. Then the function will print the answer once they click the click
here button from the html file. */
function ride_Function(){
    var Height, can_Ride;
    Height = document.getElementById("Height").value;
    can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = can_Ride + " to ride.";
}

function age_Function() {
    var Age, can_Vote;
    Age = document.getElementById("Age").value;
    can_Vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = can_Vote + " to vote."
}

/*Here we have created a function that has the "this" keyword which
indicates the object that is the owner of the code(by doing the this
    we were able to use the Make, Model, Year, and color that is put
    in the paramater of the function) it basically makes it so they can
    hold stuff like in the code below */
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Modle = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
/* here we create the vehicles within our Var's and we use the "new"
keyword as it is to create a new object and so we were able to use
it to create a Vehicle object for multiple people and assign the code
above with actual values*/
var Jack = new Vehicle("Dodge", "Charger", 2020, "Black");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White");
var Erik = new Vehicle("Ford", "Focus RS", 2018, "Dark Gray");

/* here we make another function to execute the code and we created
a button in html that when clicked will print the color of car Erik
drives, the model and the year. (we can also do this with the others.) */
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Modle 
    + " manufacuted in " + Erik.Vehicle_Year;
}

function Skateboard(Make, Ply, Size) {
    this.Skateboard_Make = Make;
    this.Skateboard_Ply = Ply;
    this.Skateboard_Size = Size;

}

var Spencer = new Skateboard("Creature", "7-ply", 8.63)
var Terran = new Skateboard("Real", "5-ply", 8.25)

function Skateboard_Function() {
    document.getElementById("New_and_This").innerHTML = "Terran rides a " +
    Terran.Skateboard_Ply + ", " + Terran.Skateboard_Size + 
    " " + Terran.Skateboard_Make
    + " Skateboard."
}

/* This will be a nested function that will have a function within
the function and it will take a counting number and then add one to it
and then it will return the number after it has added 1 to the number 
we made with the var */

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var starting_Poing = 6;
        function plus_One() {starting_Poing += 1;}
        plus_One();
        return starting_Poing;
    }
}