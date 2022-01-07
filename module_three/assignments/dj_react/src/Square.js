import React from "react";

function Square(props) {
    const styling = {
        display: "flex",
        backgroundColor: props.color, 
        padding: "100px", 
        border: "0.5px solid black", 
        margin: "5px"
    }

   return (
        <div>
            {props.index % 2 === 0 ? 
                <div>
                    <div style={styling}>
                    </div>
                </div>
            :
                <div>
                    <div style={styling}>
                    </div>
                </div>
            }
        </div>
   )
}

export default Square;