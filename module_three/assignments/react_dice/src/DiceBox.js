import React from "react";
import Die from "./Die";

class DiceBox extends React.Component {
    constructor() {
        super();
        this.state = {
            dieValues: [0, 0, 0, 0, 0, 0]
        };
        this.ReRoll = this.ReRoll.bind(this);
    };

    ReRoll() {
        function randomInt() {
            return Math.floor(Math.random() * 6) + 1
        }
        this.setState(prevState => {
            return {
                dieValues: prevState.dieValues.map(currVal => {
                    return currVal = randomInt()
                })
            };
        });
    };
    
    render() {
        console.log(this.state.dieValues)
        const diceNumbers = this.state.dieValues.map((currVal, index) => <Die key={index} value={currVal}/>)
        return (
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 115px)"}}>
                {diceNumbers}
                <button onClick={this.ReRoll}> Re-Roll Dice </button>
            </div>
        );
    };
};

export default DiceBox