import React from "react";
import Information from "./resources/Information";
import Friend from "./components/Friend";

function App() {
    const friendList = Information.map(index => <Friend key={index.name} info={index} />);
    const listStyling = {
        display: "flex",
        justifyContent: "left",
        alignItems: "center"
    }

    return (
        <div style={listStyling}>
            {friendList}
        </div>
    );
};

export default App;