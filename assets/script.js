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

//  Chooses password length
genPasswordBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var passwordLen = prompt("How many characters would you like your password to contain?");


    // Verifies password length is between 8-128 characters
    if (passwordLen < 8 || passwordLen > 128) {
        alert("Password must be between 8 - 128 characters")
        return;
    }

    // Gives user options on their password preference
    function getUserOptions() {
        if (confirm("Add uppercase letters?")) {
            tempValues = tempValues + upperCase;
            console.log(tempValues);
        }

        if (confirm("Add lowercase letters?")) {
            tempValues = tempValues + lowerCase;
            console.log(tempValues);
        }

        if (confirm("Add numbers?")) {
            tempValues = tempValues + numbers;
            console.log(tempValues);
        }

        if (confirm("Add special characters?")) {
            tempValues = tempValues + specialChar;
            console.log(tempValues);
        }
    }

    getUserOptions();
    for (var i = 0; i < passwordLen; i++) {
        password = password + tempValues.charAt(Math.floor(Math.random() * values.length)+ 1);
        console.log(password);
        // password = password + getUserOptions(Math.floor(Math.random() * values.length)+ 1);
    }


// Displays generated password
yourPassword.textContent = password;

});

// Copies password to clipboard
copyPasswordBtn.addEventListener("click", function () {
    yourPassword.select();
    document.execCommand("copy");
    alert("Your password has been copied");
});