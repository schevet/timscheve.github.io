var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var special = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"]

var someNumber = Math.floor(Math.random() * 10)

var characters = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,],
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], 
[ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
[" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"]];

var numericCharLength = numeric.length
var uppercaseCharLength = uppercase.length
var lowercaseCharLength = lowercase.length
var specialCharLength = special.length

var selectParameter = Math.floor((Math.random() * 3));
var selectChar = selectParameter[Math.floor((Math.random() * characters[selectParameter.length]))]

console.log(selectParameter);
console.log(selectChar)

var pwdLength = parseInt(prompt("How long would you like your password to be? Must be 8-128 characters: "));
var pwdUppercase = confirm("Do you want UPPERCASE letters in your password?");
var pwdLowercase = confirm("Do you want lowercase letters in your password?");
var pwdNumber = conrfirm("Do you want numbers in your password?");

for (i = 0; i < pwdLength; i++){
    
}


