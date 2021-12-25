const djCube = document.getElementById("theDjCube");
const theBox = document.getElementById("cubeHolder");

theBox.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 50px auto; height: 500px; width: 500px;";
djCube.style.cssText = "display: flex; height: 200px; width: 200px; align-items: center; justify-content: center; border: 2px solid black; margin: 15px;";

djCube.addEventListener('mouseover', () => {
    djCube.style.backgroundColor = "blue";
});
djCube.addEventListener('mousedown', () => {
    djCube.style.backgroundColor = "red";
});
djCube.addEventListener('mouseup', () => {
    djCube.style.backgroundColor = "yellow";
});
djCube.addEventListener('dblclick', () => {
    djCube.style.backgroundColor = "green";
});
window.addEventListener('wheel', () => {
    djCube.style.backgroundColor = "orange";
})
window.addEventListener('keydown', (e) => {
    let key = e.key;

    switch(key) {
        case "b":
            djCube.style.backgroundColor = "blue";
            break;
        case "r":
            djCube.style.backgroundColor = "red";
            break;
        case "y":
            djCube.style.backgroundColor = "yellow";
            break;
        case "g":
            djCube.style.backgroundColor = "green";
            break;
        case "o":
            djCube.style.backgroundColor = "orange";
    }
})