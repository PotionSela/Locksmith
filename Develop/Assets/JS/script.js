// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Define character sets for password criteria
let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numericChars = "0123456789";
let specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

// Function to generate a random password
function generatePassword() {
  let passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");

  // Validate password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }

  // Ask for criteria
  let includeLowercase = confirm("Include lowercase letters?");
  let includeUppercase = confirm("Include uppercase letters?");
  let includeNumeric = confirm("Include numeric characters?");
  let includeSpecial = confirm("Include special characters?");

  // Validate that at least one criteria is selected
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("You must select at least one character type.");
    return "";
  }

  // Build the character set based on selected criteria
  let chars = "";
  if (includeLowercase) {
    chars += lowercaseChars;
  }
  if (includeUppercase) {
    chars += uppercaseChars;
  }
  if (includeNumeric) {
    chars += numericChars;
  }
  if (includeSpecial) {
    chars += specialChars;
  }

  // Generate the password
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }

  // Display the generated password
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

  return password;
}

// Write password to the #password input
function writePassword() {
  generatePassword(); // Call the function to generate the password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
