const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
    
    let count = 0;

    for (let i = 0; i < officeItems.length; i++) {
        if (officeItems[i] === "computer") {
            count++
        }
    }
    console.log(count)



const peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
]

    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        let name = peopleWhoWantToSeeMadMaxFuryRoad[i].name;
        let age = peopleWhoWantToSeeMadMaxFuryRoad[i].age;
        let gender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender;

        if (age >= 18 && gender === "male") {
            console.log(name + " is old enough. He's good to see Mad Max Fury Road.");
        }
        if (age < 18 && gender === "male") {
            console.log(name + " is not old enough to see Mad Max Fury Road. Don't let him in.");
        }    
        if (age >= 18 && gender === "female") {
            console.log(name + " is old enough. She's good to see Mad Max Fury Road.");
        }
        if( age < 18 && gender === "female") {
            console.log(name + " is not old enough to see Mad Max Fury Road. Don't let her in.");
        }
    }

const numArrOne = [2, 5, 435, 4, 3];
const numArrTwo = [1, 1, 1, 1, 3];
const numArrThree = [9, 3, 4, 2];
const isLightOn = false;