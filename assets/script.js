var genPasswordBtn = document.getElementById("genPasswordBtn");
var copyPasswordBtn = document.getElementById("copyPasswordBtn");
var yourPassword = document.getElementById("yourPassword");
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-+{}|[]\;':.//?><`~";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&*()_-+={}|[]\;':.,/?><`~"
var password = "";



var passwordLen = prompt("How many characters would you like your password to contain?");
if (passwordLen < 8 || passwordLen > 128) {
    alert("Password must be between 8 - 128 characters")
}


for (var i = 0; i <= passwordLen; i++) {
    var password = password + tempValues.charAt(Math.floor(Math,random() * Math.floor(values.length-1)));
}

// Copy password to clipboard
function copyPassword() {
    document.getElementById("yourPassword").select();
    document.execCommand("Copy");
    alert("Your password has been copied");
}