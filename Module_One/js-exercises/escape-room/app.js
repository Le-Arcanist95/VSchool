const readlineSync = require("readline-sync");
let choice = ""

console.log("You signed up for this. It was a once in a lifetime offer. You signed a waiver stating that anything to occur within the room is of your own volition. The time limit is one hour to escape before we flood the room with poison gas. Good Luck!")
setTimeout(() => {
    console.log("You have been given three options, in earlier explanation of how this escape room works. Choose wisely: ");
    console.log("1. Put hand in hole");
    console.log("2. Find the key");
    console.log("3. Open the door.");
}, 2000)
setTimeout(() => {
    choice = readlineSync.question("What is your selection ..? ")
}, 5000)

switch(choice) {
    case "1" || "Put hand in hole" || "put hand in hole":
        break;
    case "2" || "Find the key" || "find the key":
        break;
    case "3" || "Open the door" || "open the door":
        break;
}