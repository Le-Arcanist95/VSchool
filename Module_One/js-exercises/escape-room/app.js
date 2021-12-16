const readlineSync = require("readline-sync");

let isGameOver = null;
let hasKey = null;
let isUnlocked = null;

const name = readlineSync.question("What is your name? ");
    console.log("You signed up for this, " + name + ". It was a once in a lifetime offer. You signed a waiver stating that anything to occur within the room is of your own volition. The time limit is one hour to escape before we flood the room with poison gas. Good Luck!");
    escapeRoom()

function escapeRoom() {
    console.log("Choose wisely: ", '\n', "1. Put your hand in the hole in the floor.", '\n', "2. Try to solve the puzzle.", '\n', "3. Open the door.");

    const choice = readlineSync.question("What is your selection ..? (Use number to make choice)");

    switch(choice) {
        case "1":
            if (Math.random() >= 0.9) {
                hasKey = true;
                console.log("You twisted every knob, clicked every button, and lost a few fingers along the way. In the end though, you were able to find the key to escape. Good job.");
                escapeRoom();
            } else {
                hasKey = false;
                console.log("Better luck next time.");
                escapeRoom();
            }
            break;
    }
}