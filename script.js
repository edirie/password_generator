// Assignment Code
var generateBtn = document.querySelector("#generate");

// Main Variables
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperChars = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var specialChars = ["+","-","&&","||","!","(",")","{","}","[","]","^","~","*","?",":",];


//  Generate Password Function
function generatePassword() {
  var length = window.prompt("How many characters between 8 and 128?");
  if (length < 8 || length > 128) {
    window.alert("Invalid length selection, please try again.");
    formPass();
  }
  if (isNaN(length)) {
    window.alert("Not a number, please try again.");
    formPass();
  }

//  Yes/No options for a variety of characters
  var wantSpecialchar = confirm("If you want special characters, press okay");
  var wantNumbers = confirm("If you want numbers, press okay");
  var wantLow = confirm("If you want lowercase characters, press okay");
  var wantUpper = confirm("If you want uppercase characters, press okay");

  if (wantSpecialchar === false && wantNumbers === false && wantLow === false &&wantUpper === false) {
    window.alert("Please meet the proper criteria");
  }

//   Vairable to confirm characters
  var conCharacters = [];

  if (wantSpecialchar) {
     conCharacters = conCharacters.concat(specialChars);
  }

  if (wantNumbers) {
      conCharacters = conCharacters.concat(numberChars);
  }

  if (wantLow) {
      conCharacters = conCharacters.concat(lowerChars);
  }

  if (wantUpper) {
      conCharacters = conCharacters.concat(upperChars);
  }

//   Randomizer
  var newPass = conCharacters.sort(() => Math.random() - Math.random() ).slice(0, length)
  console.log(newPass)

  var finalPass = newPass.join("")

  return finalPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
