import React from "react";

function Color(props) {
    const { hex, currentKey, index } = props.attributes;
    const { handleColorChange } = props.functions;

    return (
        <li className="colors-item">
            <p> Color {index + 1} </p>
            <p> {hex} </p>
            <form>
                <input type={"color"} name={currentKey} value={hex} onChange={handleColorChange}/>
            </form>
        </li>
    )
}

export default Color;