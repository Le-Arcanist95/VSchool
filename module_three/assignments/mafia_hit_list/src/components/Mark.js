import React, { useState } from "react";

export default function Mark(props) {
    const [isComplete, setIsComplete] = useState(false);

    function handleConfirm() {
        setIsComplete(!isComplete)
    }

    return (
        <div className="mark--container" onClick={handleConfirm}>
            <img className="mark--image" alt="" src={props.info.image}/>
            <div className="name--overlay">
                {props.info.name}
            </div>
            {isComplete ? <div className="x--overlay"> Complete </div> : <div></div>}
        </div>
    )
}