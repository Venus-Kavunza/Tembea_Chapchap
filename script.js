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