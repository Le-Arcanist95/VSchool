const goombaCount = document.getElementById("goombaCount");
const bombCount = document.getElementById("bombCount");
const cheepCount = document.getElementById("cheepCount");
const bill = document.getElementById("bill");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let goombaInput = document.pestTracker.goombaInput.value;
    let bombombInput = document.pestTracker.bombInput.value;
    let cheepInput = document.pestTracker.cheepInput.value;
    let newGoomba = parseInt(goombaCount.textContent) + parseInt(goombaInput);
    let goombaPrice = newGoomba * 5;
    let newBombomb = parseInt(bombCount.textContent) + parseInt(bombombInput);
    let bombPrice = newBombomb * 7;
    let newCheep = parseInt(cheepCount.textContent) + parseInt(cheepInput);
    let cheepPrice = newCheep * 11;

    goombaCount.textContent = newGoomba + " / " + goombaPrice + " Coins";
    bombCount.textContent = newBombomb + " / " + bombPrice + " Coins";
    cheepCount.textContent = newCheep + " / " + cheepPrice + " Coins";

    bill.textContent = (goombaPrice + bombPrice + cheepPrice) + " Coins";

});