const readline = require("readline-sync");
const phrase = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const amount = parseInt(readline.question('How many letters would you like to shift? '));

function cipher(str, num) {
    return str.replace(/[a-z]/g, index => String.fromCharCode((index.charCodeAt(0) - 97 + num) % 26 + 97));
}

console.log(cipher(phrase, amount));