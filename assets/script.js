var genPasswordBtn = document.getElementById("genPasswordBtn");
var copyPasswordBtn = document.getElementById("copyPasswordBtn");
var yourPassword = document.getElementById("yourPassword");
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-+{}|[]\;':.//?><`~";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&*()_-+={}|[]\;':.,/?><`~";
var password = "";
var tempValues = "";


genPasswordBtn.addEventListener("click", function () {
    var passwordLen = prompt("How many characters would you like your password to contain?");

    if (passwordLen < 8 || passwordLen > 128) {
        alert("Password must be between 8 - 128 characters")
        return;
    }

    if (confirm("Add uppercase letters?")) {
        tempValues = tempValues + upperCase;
    }

    if (confirm("Add lowercase letters?")) {
        tempValues = tempValues + lowerCase;
    }

    if (confirm("Add numbers?")) {
        tempValues = tempValues + numbers;
    }

    if (confirm("Add special characters?")) {
        tempValues = tempValues + specialChar;
    }
});

function passwordLen();
for (var i = 0; i <= passwordLen; i++) {
    password = password + tempValues.charAt(Math.floor(Math.random() * Math.floor(values.length-1)));
}

// Display generated password
yourPassword.textContent = password;

// Copy password to clipboard
function copyPassword() {
    document.getElementById("yourPassword").select();
    document.execCommand("Copy");
    alert("Your password has been copied");
}