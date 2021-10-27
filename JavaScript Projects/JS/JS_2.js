/* */
function validateForm() {
    if (document.myForm.Name.value == "") {
        alert("Please enter in your name.");
        return false;
    }
    if (document.myForm.Email.value == "") {
        alert("Please enter in your email.");
        document.myForm.Email.focus();
        return false;
    }
    if (document.myForm.pNumber.value == "") {
        alert("Please enter in your phone number.");
        return false;
    }
    if (document.myForm.Message.value == "") {
        alert("Please enter in a message.");
        return false;
    }
}

