/* This will create an alert pop up that will run our string plus the html
code to show a character we put in earlier and what universe it is from.
It gets the attribute of the data-character-type and makes it into a var
and then that var is now equal to the character name we put in our html file.
Then when we use the character.innerHTML it gets the universe name for us */
function displayType(character) {
    let characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!")
}