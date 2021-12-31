const personArr = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];
const secondPersonArr = [
    {
        firstName: "Elmo",
        lastName: "Baggins",
        age: 17
    },
    {
        firstName: "Rudolph",
        lastName: "Grainger",
        age: 23
    },
    {
        firstName: "Garfield",
        lastName: "Poppins",
        age: 64
    }
];

// Using the provided `peopleArray`, write a function that:
    function sortedOfAge(arr) {
        // 1. Returns a list of everyone older than 18
        const filteredAgeArr = arr.filter((e) => e.age >= 18);
        // 2. Sorted alphabetically by last name
        const alphabetisedArr = filteredAgeArr.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
        // 3. Each name and age is embedded in a string that looks like an HTML `<li>` element.
        const finalArr = alphabetisedArr.map((e) => "<li>" + e.firstName + " " + e.lastName + " is " + e.age + ".</li>");

        return finalArr;
    };

// # **Extra Credit**

// - Create another array of one or more individuals and add it to the original array.
    const concatArr = personArr.concat(secondPersonArr);

// - Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
    function nameBias(arr) {
        const ayBiasArr = arr.filter((e) => e.lastName.endsWith("a") || e.lastName.endsWith("y"));

        return ayBiasArr;
    };

    console.log(nameBias(concatArr));

// - Remove the second individual from the array.
    const noSeconds = concatArr.splice(1, 1);

    console.log(noSeconds);

// - Return the array in reverse order.
    console.log(concatArr.reverse());


console.log(sortedOfAge(concatArr));