import React, { useState } from "react";

import Display from "./Display";
import Controls from "./Controls";

function GradientGenerator() {
    const [colors, setColors] = useState({
        color_1: "#ff0000",
        color_2: "#0000ff"
    });
    const [angle, setAngle] = useState(90);
    let colorCount = Object.keys(colors).length;

    function handleAngleChange(e) {
        const target = e.target.value;

        setAngle(target);
    }
    function handleColorChange(e) {
        const { name, value } = e.target;

        setColors(prevColors => ({
            ...prevColors,
            [name]: value
        }));
    }
    function addColor() {
        setColors(prevColors => ({
            ...prevColors,
            ["color_" + (parseInt(colorCount) + 1)]: "#ffffff"
        }))
    }

    return (
        <div className="generator">
            <Display attributes={{colors, angle}}/>
            <Controls attributes={{colors, angle}} functions={{ handleColorChange, handleAngleChange, addColor }}/>
        </div>
    )
}

export default GradientGenerator;