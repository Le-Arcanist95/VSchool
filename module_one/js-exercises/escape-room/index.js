const readlineSync = require("readline-sync");

let isGameOver = null;
let hasKey = null;

const name = readlineSync.question("What is your name? ");
    console.log("You signed up for this, " + name + ". It was a once in a lifetime offer. You signed a waiver stating that anything to occur within the room is of your own volition. The time limit is one hour to escape before we flood the room with poison gas. Good Luck!");
    escapeRoom()

function escapeRoom() {
    console.log("Choose wisely: ", '\n', "1. Try to solve the puzzle.", '\n', "2. Put your hand in the hole in the floor.", '\n', "3. Open the door.");

    const choice = readlineSync.question("What is your selection ..? (Use number to make choice)");

    switch(choice) {
        case "1":
            if (Math.random() >= 0.75) {
                hasKey = true;
                console.log("You twisted every knob, clicked every button, and lost a few fingers along the way. In the end though, you were able to find the key to escape. Good job.");
                escapeRoom();
            } else {
                hasKey = false;
                console.log("Your search was futile. Better luck next time.");
                escapeRoom();
            }
            break;
        case "2":
            isGameOver = true;
            console.log("The hole was never a good idea and we both knew it. See you in the afterlife then!");
            reset();
        case "3":
            if (hasKey === true){
                console.log("You unlock the door and escape. They give you a sticker to put on the wall of fame and a sucker on the way out the door. Hope the adrenaline rush was worth it.");
            } else {
                console.log("The door is locked, silly. You'll have to try harder than that.");
                escapeRoom();
            }
    }
}
function reset() {
    const reset = readlineSync.question("Game Over. Try again? (y/n)");

    if (reset === "y") {
        isGameOver = false;
        hasKey = false;
        escapeRoom();
    } else {
        console.log("Maybe another time then.")
    }
}