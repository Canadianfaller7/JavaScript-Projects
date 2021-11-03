function getReceipt() {
    /* this initializes our string so it can get passed from
    function to function, gorwing line by line into a full receipt*/
    let text1 = "<h3>You Ordered:</h3>";
    let runningTotal = 0;
    let sizeTotal = 0;
    let sizeArray = document.getElementsByClassName('size');
    /* this is a for loop that takes the sizes from the html file and makes 
    them into an array and says if the size is less than the length of the array
    add to it to get an actual size and then we have a selected size var that will
    get the value of the array number that was put in and return the value(see notes
    notes bellow as well)*/
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + '<br>'
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }
    else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    }
    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    /* this takes the size of pizza you picked earlier and adds it to the bill and 
    then it is going to print on the screen later*/
    runningTotal = sizeTotal;
    console.log(selectedSize + " $" + sizeTotal + ".00");
    console.log("size text1: "+ text1)
    console.log("subtotal: $" + runningTotal + ".00");
    // these variables will get passed on to each function
    getTopping(runningTotal,text1);
};
/* this function then takes the running total and the text1 which is saying this is what
you have ordered so far and will then take the toppings that were created from the html
file and will make an array and then make a for loop and will let you choose your toppings
and however many you want and then will add that topping to the text1 value wich will
be printed on the screen*/
function getTopping(runningTotal,text1) {
    let toppingTotal = 0;
    let selectedTopping = [];
    let toppingArray = document.getElementsByClassName("topping");
    for (let j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selceted topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + '<br>';
        }
    }
    /* here we are saying make a topping count that is equal to the array length and if
    the topping is more than 1 topping subtract 2 toppings away from it becuase they will
    be free(1 free topping and then the sauce choice will be free too in the JS code)
    and if no topping is chosen then they won't be charged for toppings. */
    let toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 2);
    } else {
        toppingTotal = 0;
    }
    /* this then takes the running total of the size of the pizza and the toppings
    you chose and will then add them together and get you a final total and then
    it will tell you the size of pizza you chose, all the toppings, and sauce and then
    it will tell you your total in bold off to the side. ( these console.log code will
    only be printed in the console and you can see what they do there.*/
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 2 free topping = " +toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    // this code will show everything you ordered
    document.getElementById("showText").innerHTML = text1;
    // this code gives your total
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
    runningTotal + ".00" + "</strong></h3>";
};
