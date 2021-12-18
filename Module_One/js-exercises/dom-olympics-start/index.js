const header = document.getElementById("header")
const h1 = document.createElement("h1");
const h3 = document.createElement("h3");
const nameSpan = document.createElement("span");
const creditSpan = document.createElement("span");
const messageContainer = document.getElementById("main");
const messages = document.querySelector(".messages");
const message = document.getElementsByClassName("message");
const leftMsgs = document.querySelectorAll(".left");
const rightMsgs = document.querySelectorAll(".right");
const themeSelect = document.getElementById("theme-drop-down");
const sendButton = document.getElementById("send-button");
const clearButton = document.getElementById("clear-button");
const funButton = document.createElement("button");
const input = document.getElementById("input");

h1.textContent = "JavaScript Made This!!";
nameSpan.textContent = "Levi Arcane ";
creditSpan.textContent = "wrote the Javascript";
funButton.textContent = "Make it Fun"

h3.append(nameSpan, creditSpan);
header.append(h1, h3);
messageContainer.append(funButton);

funButton.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 0; i < message.length; i++) {
        const funArr = ["Raindrops on Roses", "Whiskers on Kittens", "Bright Copper Kettles", "Warm Woolen Mittens", "Cream-Colored Ponies", "Crisp Apple Strudels", "Doorbells and Sleighbells", "Schnitzel with Noodles"];

        message[i].textContent = funArr[i];
    }
});
clearButton.addEventListener('click', (e) => {
    e.preventDefault();

    messages.innerHTML = "";
})
themeSelect.addEventListener('select', (e) => {
    e.preventDefault();

    switch(themeSelect.value) {
        case "theme-one":
            for (let i = 0; i < rightMsgs.length; i++) {
                rightMsgs[i].style.backgroundColor = "lightblue";
                rightMsgs[i].style.color = "black" ;
            }
            for (let i = 0; i < leftMsgs.length; i++) {
                leftMsgs[i].style.backgroundColor = "burlywood";
                leftMsgs[i].style.color = "black";
            }
            break;
        case "theme-two":
            for (let i = 0; i < rightMsgs.length; i++) {
                rightMsgs[i].style.backgroundColor = "red";
                rightMsgs[i].style.color = "white" ;
            }
            for (let i = 0; i < leftMsgs.length; i++) {
                leftMsgs[i].style.backgroundColor = "black";
                leftMsgs[i].style.color = "white";
            }
            break;
    }
});

