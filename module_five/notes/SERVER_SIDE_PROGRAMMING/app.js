const { sum, subtract } = require("./math.js");
const sum2 = require("./math.js").sum;
const mult = require("./math2.js");

console.log(sum(15, 27)); // 42
console.log(subtract(117, 31)); // 86
console.log(sum2(37, 32)); // 69
console.log(require("./math.js").subtract(30, 13)); // 17
console.log(mult(1234)); // 2468

