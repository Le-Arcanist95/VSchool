import React from "react";
import Card from "./Card";
import vacationSpots from "./VacationSpotList"

function App() {
    const cardList = vacationSpots.map(item => <Card key={item.id} location={item}/>)

    return (
        <div>
            {cardList}
        </div>
    );
};

export default App;