import React, { useState } from "react";

import Display from "./Display";
import Controls from "./Controls";

function GradientGenerator() {
    const [colors, setColors] = useState({});
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
    function removeColor(e) {
        e.preventDefault()
        setColors(prevColors => {
            const newColors = prevColors;
            delete newColors[e.target.form[0].name];
            return (newColors);
        })
    }

    return (
        <div className="generator">
            <Display attributes={{colors, angle}}/>
            <Controls attributes={{colors, angle}} functions={{ handleColorChange, handleAngleChange, addColor, removeColor}}/>
        </div>
    )
}

export default GradientGenerator;