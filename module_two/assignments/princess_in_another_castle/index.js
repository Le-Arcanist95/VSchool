const readline = require("readline-sync")
const statusValues = ["Dead", "Small", "Large", "Powered Up"];
const nameChoices = ["Mario", "Luigi"]

class Player {
    constructor() {
        this.name = "";
        this.totalCoins = 0;
        this.gameActive = true;
        this.status = statusValues[1];
        this.hasStar = false;
    }
    setName(namePicked){
        if (namePicked === 0){
            this.name = "Mario";
        } else if (namePicked === 1){
            this.name = "Luigi";
        }
    }
    gotHit(){
        if (this.status === statusValues[3] && this.hasStar === true) {
            console.log("Your star protected you!")
            this.hasStar = false;
        } else if (this.status === statusValues[3]){
            this.status = statusValues[2];
        } else if (this.status === statusValues[2]){
            this.status = statusValues[1];
        } else if (this.status === statusValues[1]){
            this.status = statusValues[0];
            this.gameActive = false;
        }
    }
    gotPowerup(){
        if (this.status === statusValues[3]){
            console.log("Congratulations! You got a star!");
            this.hasStar = true;
        } else if (this.status === statusValues[2]){
            this.status = statusValues[3];
        } else if (this.status === statusValues[1]){
            this.status = statusValues[2];
        }
    }
    addCoin(){
        this.totalCoins++;
    }
    print(){
        let starMsg = "";
        
        if(this.hasStar === true){
            starMsg = "You have a star"
        }

        console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Total Coins: ${this.totalCoins}
        ${starMsg}
        `)
    }
}
const player = new Player();
const name = readline.keyInSelect(nameChoices);
player.setName(name);

const activeGameCodeBlock = () => {
    min = Math.ceil(0);
    max = Math.floor(2);
    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    if(randomInt === 0) {
        player.gotHit();
    } else if (randomInt === 1) {
        player.gotPowerup();
    } else if (randomInt === 2) {
        player.addCoin();
    };
    player.print();
    
    if(player.gameActive === false){
        clearInterval(intervalId);
    };
};
const intervalId = setInterval(activeGameCodeBlock, 1000);
