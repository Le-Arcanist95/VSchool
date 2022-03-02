import React from "react";
import Square from "./Square";

function App() {
    const [colors, setColors] = React.useState(["white", "white", "white", "white"])
    
    function colorChange(buttonNum) {
        setColors((prevColors) => {
            if (buttonNum === 1 && colors[0] === "white") {
                return ["black", "black", "black", "black"];
            } 
            else if (buttonNum === 1 && colors[0] === "black") {
                return ["white", "white", "white", "white"];
            } 
            else if (buttonNum === 1) {
                return ["white", "white", "white", "white"]
            } 
            else if (buttonNum === 2) {
                return ["purple", "purple", prevColors[2], prevColors[3]]
            } 
            else if (buttonNum === 3) {
                return [prevColors[0], prevColors[1], "blue", prevColors[3]]
            } 
            else if (buttonNum === 4) {
                return [prevColors[0], prevColors[1], prevColors[2], "blue"]
            } 
            else if (buttonNum === 5) {
                return [prevColors[2], prevColors[1], prevColors[3], prevColors[0]]
            } 
            else if (buttonNum === 6) {
                return [prevColors[0], prevColors[3], prevColors[1], prevColors[2]]
            } 
            else if (buttonNum === 7) {
                return [prevColors[1], prevColors[2], prevColors[0], prevColors[3]]
            } 
            else if (buttonNum === 8) {
                return [prevColors[3], prevColors[0], prevColors[2], prevColors[1]]
            }
        });
    };
    function playSound() {
        return console.log("This song is fire!");
    };
    
    let colorGrid = colors.map((currColor, index) => <Square key={index} index={index} color={currColor} />);
    
    return (
        <div>
            <div style={{
                display: "grid",
                margin: "auto",
                gridTemplateColumns: "repeat(2, 50%)"

            }}>
                {colorGrid}
            </div>
            <div style={{
                display: "grid",
                margin: "auto",
                gridTemplateColumns: "repeat(2, 1fr)"
            }}>
                <button onClick={() => {
                    colorChange(1)
                    return playSound()
                }}> All Black/White 
                </button>
                <button onClick={() => {
                    colorChange(2)
                    return playSound()
                }}> Top Purple 
                </button>
                <button onClick={() => {
                    colorChange(3)
                    return playSound()
                }}> Left Blue 
                </button>
                <button onClick={() => {
                    colorChange(4)
                    return playSound()
                }}> Right Blue 
                </button>
                <button onClick={() => {
                    colorChange(5)
                    return playSound()
                }}> Big Time One 
                </button>
                <button onClick={() => {
                    colorChange(6)
                    return playSound()
                }}> Big Time Two 
                </button>
                <button onClick={() => {
                    colorChange(7)
                    return playSound()
                }}> Big Time Three 
                </button>
                <button onClick={() => {
                    colorChange(8)
                    return playSound()
                }}> Big Time Four 
                </button>
            </div>
        </div>
    )
};

export default App;