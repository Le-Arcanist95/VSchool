import React, { useEffect } from "react";

export default function App() {
    const [color, setColour] = React.useState({});
    const [randomNum, setRandomNum] = React.useState(0);

    useEffect(() => {
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => res.json())
            .then(data => setColour(data.colors[0]));
    }, [randomNum]);

    function handleClick() {
        setRandomNum(() => (Math.random()))
    };

    console.log(color)
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{backgroundColor: `#${color.hex}`, padding: "300px", width: "50%", margin: "auto"}}></div>
            <button style={{alignSelf: "center", padding: "10px", margin: 15}} onClick={handleClick}>Change the Colour</button>
        </div>
    );
};