
let username = document.getElementById("username");
let password = document.getElementById("password");


const loginBtn = document.getElementById("login")
loginBtn.addEventListener("click", function() {

    if (username.value == "russelle") {
        alert("youre log in")   
    } else {
        alert ("incorrect username")
    }  
})


