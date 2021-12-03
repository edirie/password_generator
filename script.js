// Assignment Code
var generateBtn = document.querySelector("#generate");

// change all var to string
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperChars = ["A", "B","C","D","E","F",G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!”#$%&’()*+,-./:;<=>?@][^_`{|}~";

function formPass() {
  var length = window.prompt("How many characters between 8 and 128?");

  if (length < 8 || length > 128) {
    window.alert("Invalid length selection, please try again.");
  }
  if (isNaN(length)) {
    window.alert("Invalid length selection, please try again.");
  }

    var wantSpecialchar = confirm("If you want special characters, press okay");
    var wantNumbers = confirm("If you want numbers, press okay");
    var wantLow = confirm("If you want lowercase characters, press okay");
    var wantUpper = confirm("If you want uppercase characters, press okay");

    if (wantSpecialchar === false && wantNumbers === false && wantLow === false && wantUpper === false) {
        window.alert("Please entere criteria")
    } 
    
    var passProperties = {
        length: length, 
        wantSpecialchar: wantSpecialchar,
        wantLow: wantLow,
        wantUpper: wantUpper,
    };

    return (passProperties);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", formPass);
