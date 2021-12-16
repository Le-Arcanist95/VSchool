const readlineSync = require("readline-sync")

function add(num1, num2) {
    return Number(num1) + Number(num2)
}
function sub(num1, num2) {
    return num1 - num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}

let num1 = readlineSync.question("Please enter your first number: ");
let num2 = readlineSync.question("Please enter your second number: ");
let operator = readlineSync.question("Please enter the operation to perform (add, sub, mul, div): ")

switch(operator) {
    case "add":
        console.log(add(num1,num2))
}