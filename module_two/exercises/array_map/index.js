const numArr = [2, 5, 10, 20, 50];
const stringArr = ["hI", "my", "NAmE", "iS", "lEvI"];
const personArr = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

// 1) Make an array of numbers that are doubles of the first array
    function doubleNumbers(arr) {
        return arr.map((e) => parseInt(e) * 2);
    };

    console.log(doubleNumbers(numArr));

// 2) Take an array of numbers and make them strings
    function stringItUp(arr) {
        return arr.map((e) => e.toLocaleString());
    };

    console.log(stringItUp(numArr));

// 3) Capitalize each of an array of names
    function capsCorrect(arr) {
        return arr.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
    };

    console.log(capsCorrect(stringArr));

// 4) Make an array of strings of the names
    function namesOnly(arr) {
        return arr.map((e) => e.name);
    };
    
    console.log(namesOnly(personArr));

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
    function ageChecker(arr) {
        return arr.map((e) => {
            if (e.age >= 18) {
                return e.name + " can go see The Matrix.";
            } else {
                return e.name + " is not old enough to see The Matrix."
            };
        });
    };

    console.log(ageChecker(personArr));

// 6) Make an array of the names in h1s, and the ages in h2s
    function prepForDOM(arr) {
        return arr.map((e) => {
            const name = "<h1>" + e.name + "</h1>";
            const age = "<h2>" + e.age + "</h2>";

            return name + "<br>" + age;
        });
    };

    console.log(prepForDOM(personArr));