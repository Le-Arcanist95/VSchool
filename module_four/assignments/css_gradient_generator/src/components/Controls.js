import React from "react";

import Color from "./ColorItem";

function Controls(props) {
    const { angle, colors } = props.attributes;
    const { addColor, handleColorChange, handleAngleChange } = props.functions;
    
    const activeColors = Object.values(colors).map((hex, index) => {
        const keyValues = Object.keys(colors);
        const currentKey = keyValues[index];
        return <Color key={currentKey} attributes={{hex, currentKey, index}} functions={handleColorChange}/>
    })

    return (
        <div className="controls">
            <h2 className="controls-header"> Options </h2>
            <ul className="colors-list">
                {activeColors}
            </ul>
            <label className="angle-input"> Angle:
                <input 
                    id="angleInput"
                    type={"number"}
                    min={0}
                    max={360}
                    value={angle}
                    onChange={handleAngleChange}
                />
            </label>
            <button className="controls-add" onClick={addColor}> New Color </button>
        </div>
    )
}

export default Controls;