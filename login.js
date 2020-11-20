let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

function validate(){
    if(email.value==""){
        alert("Email cannot be empty");
        return false;
    }
    else if(pwd.value.length<8){
        alert("password is too short");
        pwd.style.border="2px solid red";
        return false;

    }
    else{
        return true;
    }

}