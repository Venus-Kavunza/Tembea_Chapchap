// Validation for Login page

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventlistener('textInput', email_Verify);
password.addEventlistener('textInput', pass_Verify);

function validated();{
    if (email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6){
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }
}
function email_Verify();{
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;    
    }
}
function pass_Verify();{
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;    
    }
}

// Validation for Contact us

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelector("#error");

function validateForm(){

    clearMessage();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNode[0].innerText = "Names cannot be blank";
        nameInput.classList.add("error.border");
        errorFlag =true;
    }

    if(!emailIsValid(email.value)){
        errorNode[1].innerText = "Invalid email address";
        email.classList.add("error.border");
        errorFlag =true;
    }

    if(message.value.length < 1){
        errorNode[2].innerText = "Please enter message";
        message.classList.add("error.border");
        errorFlag =true;
    }

    if(!errorFlag){
        success.innerText = "Success!";
    }
}

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText ="";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+.\S+/;
    return pattern.test(email);
}
function validate() {
    var username = document.getElementById("username");
    var country = document.getElementById("country");
    var contact = document.getElementById("contact");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");

    if (username.value.trim()=="") {
        return false;
    }
    else if (country.value.trim()=="") { 
        return false;
    }
    else if (contact.value.trim()=="") {
        return false;
    }
    else if (email.value.trim()=="") {
        return false;
    }
    else if (password.value.trim()=="") { 
        return false;
    }
    else if (password.value.trim().length<5) {
        alert("Password too short");
        return false;
    }
    else if (password2.value.trim()=="") {
        return false;
    }
    else if (password2.value.trim() !== password.value.trim()) {
        alert("confirm password");
        return false;
    }
    else{
        return true;
    }
}