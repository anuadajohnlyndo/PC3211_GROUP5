const username = document.getElementById('txtUsername');
const password = document.getElementById('txtPassword');
const imgpass1 = document.getElementById('imgpass1');
var form = document.getElementById('containerform');
var bgform = document.getElementById('mainform');

function signin(){
    if(username.value == "group5@email.com" && password.value == "mamtonixgwapa"){
        form.style.display = "none";
        bgform.style.display = "none";
        imgpass1.style.display = "block";
        imgpass1.style.animation = "0.5s pop-in ease-in-out forwards";

    }
    else{
        password.style.border = "0.5px solid red"
    }
}


function next(){
    window.location = "password2.html";
}