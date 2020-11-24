let listheader = document.querySelectorAll('.li-header');

listheader.forEach(element => {
    let nextElement = element.nextElementSibling;

        while(nextElement.nodeName == "A"){

            if(nextElement.style.display == "none"){
                nextElement.style.display = "block"
            } else{
                nextElement.style.display = "none";
            }

            if(nextElement.nextElementSibling != null){
                nextElement = nextElement.nextElementSibling;
            } else {
                break;
            }
        }
    element.addEventListener("click", function(){
        let nextElement = element.nextElementSibling;

        while(nextElement.nodeName == "A"){

            if(nextElement.style.display == "none"){
                nextElement.style.display = "block"
            } else{
                nextElement.style.display = "none";
            }

            if(nextElement.nextElementSibling != null){
                nextElement = nextElement.nextElementSibling;
            } else {
                break;
            }
        }

       
    });
});

let loginButton = document.querySelector('.login');
let loggedInExample = document.getElementById("loggedInAs");
let loggedIn = false;

loginButton.addEventListener("click", function(){
    if (loggedIn != true) {
        loginButton.innerHTML = "LOGOFF";
        loggedIn = true;
        loggedInExample.style.display = "block";

    } else{
        loginButton.innerHTML = "LOGIN";
        loggedIn = false;
        loggedInExample.style.display = "none";
    }
});