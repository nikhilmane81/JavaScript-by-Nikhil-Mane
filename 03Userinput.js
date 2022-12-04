//let username = windows.promt("Enter your name");
//console.log(username);


let username;
document.getElementById("mybutton").onclick = function() {
    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("lab").innerHTML = "Hello "+username;
}