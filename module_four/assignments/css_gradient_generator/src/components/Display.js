import React from "react";
import Dedent from "dedent"

function Display(props) {
    const { angle, colors } = props.attributes;
    const colorValues = Object.values(colors).join(", ");
    const cssCode = Dedent`background: linear-gradient(${angle}deg, ${colorValues});
                            -moz-background: linear-gradient(${angle}deg, ${colorValues});
                            -webkit: linear-gradient(${angle}deg, ${colorValues});`
    const gradientStyling ={
        background: `linear-gradient(${angle}deg, ${colorValues})`,
        MozBackground: `linear-gradient(${angle}deg, ${colorValues})`,
        WebkitBackground: `linear-gradient(${angle}deg, ${colorValues})`,
        height: 200,
        width: 600
    }

    return (
        <div className="display">
            <div className="display-gradient" style={gradientStyling}></div>
            <textarea 
                className="display-code"
                value={cssCode}
                readOnly
            />
        </div>
    )
}

export default Display;