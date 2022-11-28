const { sum, subtract } = require("./math.js");
const sum2 = require("./math.js").sum;
const { multiply, setFactor} = require("./math2.js");
const User = require("./user.js");

console.log(sum(15, 27)); // 42
console.log(subtract(117, 31)); // 86
console.log(sum2(37, 32)); // 69
console.log(require("./math.js").subtract(30, 13)); // 17
console.log(multiply(1234)); // 2468

setFactor(11);

console.log(multiply(1234)); // 13574
console.log(new User("George", 8)); // User { name: 'George', age: 8 }