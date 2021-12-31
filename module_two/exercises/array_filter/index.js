const numArr = [3, 6, 8, 2];
const strArr = ["dog", "wolf", "by", "family", "eaten", "camping"];
const personArr = [
    {
        name: "Angelina Jolie",
        age: 80, 
        member: true
    },
    {
        name: "Eric Jones", 
        age: 2,
        member: false
    },
    {
        name: "Paris Hilton",
        age: 5,
        member: true
    },
    {
        name: "Kayne West",
        age: 16, 
        member: false
    },
    {
        name: "Bob Ziroll",
        age: 100, 
        member: true
    }
];

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
    function filterGreaterThan(arr, num) {
        return arr.filter((e) => parseInt(e) >= num);
    };
    
    console.log(filterGreaterThan(numArr, 5));

// 2) Given an array of numbers, return a new array that only includes the even numbers.
    function filterEvenNumbers(arr) {
        return arr.filter((e) => parseInt(e) % 2 === 0);
    };

    console.log(filterEvenNumbers(numArr));

//  3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.
    function filterStrLength(arr, num) {
        return arr.filter((e) => e.length <= num);
    };

    console.log(filterStrLength(strArr, 5));

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
    function membershipChecker(arr) {
        return arr.filter((e) => e.member === true);
    };

    console.log(membershipChecker(personArr));

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
    function ageChecker(arr){
        return arr.filter((e) => e.age >= 18)
    };

    console.log(ageChecker(personArr));