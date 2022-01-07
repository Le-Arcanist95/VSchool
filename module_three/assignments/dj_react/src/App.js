import React from "react";
import Square from "./Square";
// import audio from "./ES_Vision Transition 3 - SFX Producer"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            color: ["white", "white", "white", "white"],
            play: false
        };
        // this.audio = new Audio(audio);
        this.colorChange = this.colorChange.bind(this);
        this.playSound = this.playSound.bind(this);
    }
    colorChange(buttonNum) {
        this.setState((prevState) => {
            if(buttonNum === 1 && this.state.color[0] === "white") {
                return {
                    color: ["black", "black", "black", "black"]
                };
            } else if (buttonNum === 1 && this.state.color[0] === "black") {
                return {
                    color: ["white", "white", "white", "white"]
                };
            } else if (buttonNum === 1) {
                return {
                    color: ["white", "white", "white", "white"]
                };
            } else if (buttonNum === 2) {
                return {
                    color: ["purple", "purple", prevState.color[2], prevState.color[3]]
                };
            } else if (buttonNum === 3) {
                return {
                    color: [prevState.color[0], prevState.color[1], "blue", prevState.color[3]]
                };
            } else if (buttonNum === 4) {
                return {
                    color: [prevState.color[0], prevState.color[1], prevState.color[2], "blue"]
                };
            } else if (buttonNum === 5) {
                return {
                    color: [prevState.color[2], prevState.color[1], prevState.color[3], prevState.color[0]]
                };
            } else if (buttonNum === 6) {
                return {
                    color: [prevState.color[0], prevState.color[3], prevState.color[1], prevState.color[2]]
                };
            } else if (buttonNum === 7) {
                return {
                    color: [prevState.color[1], prevState.color[2], prevState.color[0], prevState.color[3]]
                };
            } else if (buttonNum === 8) {
                return {
                    color: [prevState.color[3], prevState.color[0], prevState.color[2], prevState.color[1]]
                };
            }
        });
    };
    playSound() {
        return console.log("This song is fire!");
    };
    
    render() {
        let colorGrid = this.state.color.map((currColor, index) => <Square key={index} index={index} color={currColor} />);
        
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
                    this.colorChange(1)
                    return this.playSound()
                    }}> All Black/White </button>
                    <button onClick={() => {
                        this.colorChange(2)
                        return this.playSound()
                    }}> Top Purple </button>
                    <button onClick={() => {
                        this.colorChange(3)
                        return this.playSound()
                    }}> Left Blue </button>
                    <button onClick={() => {
                        this.colorChange(4)
                        return this.playSound()
                    }}> Right Blue </button>
                    <button onClick={() => {
                        this.colorChange(5)
                        return this.playSound()
                    }}> Big Time One </button>
                    <button onClick={() => {
                        this.colorChange(6)
                        return this.playSound()
                    }}> Big Time Two </button>
                    <button onClick={() => {
                        this.colorChange(7)
                        return this.playSound()
                    }}> Big Time Three </button>
                    <button onClick={() => {
                        this.colorChange(8)
                        return this.playSound()
                    }}> Big Time Four </button>
                </div>
            </div>
        )
    };
};

export default App;