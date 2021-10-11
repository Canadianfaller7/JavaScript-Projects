// this function takes the str var inside and changes the text to red and then gets called in our html file
function My_First_Function() {
    var str = "This text is red";
    var result = str.fontcolor("red");
    document.getElementById("Red_Text").innerHTML = result;
}

// this function combines 2 string text together by using the += sign and displays it as 1 sentence when the function is called in the html file.
function My_Sentence_Function() {
    var sentence = "I love learning";
    sentence += " to code in JS!";
    document.getElementById("Next_Sentence") .innerHTML = sentence;
}