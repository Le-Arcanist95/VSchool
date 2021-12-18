const header = document.getElementById("header")
const h1 = document.createElement("h1");
const h4 = document.createElement("h4");
const span = document.createElement("span");

h1.textContent = "JavaScript Made This!!";
h4.textContent = "Levi Arcane wrote the JavaScript";
header.append(h1, h4)