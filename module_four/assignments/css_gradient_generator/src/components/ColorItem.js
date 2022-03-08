import React from "react";

function Color(props) {
    const { hex, currentKey, index } = props.attributes;
    const { removeColor, handleColorChange } = props.functions;

    return (
        <li className="colors-item">
            <p> Color {index + 1} </p>
            <p> {hex} </p>
            <form>
                <input type={"color"} name={currentKey} value={hex} onChange={handleColorChange}/>
                <button onClick={removeColor}> X </button>
            </form>
        </li>
    )
}

export default Color;