const header = document.getElementById("header")
const h1 = document.createElement("h1");
const h3 = document.createElement("h3");
const nameSpan = document.createElement("span");
const creditSpan = document.createElement("span");
const sendButton = document.getElementById("send-button");
const clearButton = document.getElementById("clear-button");
const funButton = document.createElement("button");
const message = document.getElementsByClassName("message");
const messages = document.querySelectorAll(".messages");
const themeSelect = document.getElementById("theme-drop-down");
const lOrient = document.querySelectorAll(".left");
const rOrient = document.querySelectorAll(".right");
const input = document.getElementById("input");




h1.textContent = "JavaScript Made This!!";
h4.textContent = "Levi Arcane wrote the JavaScript";
header.append(h1, h4);