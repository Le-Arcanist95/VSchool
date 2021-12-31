const numArr = [1, 3, 5, 2, 90, 20];
const strArr = ["dog", "wolf", "by", "family", "eaten"];
const personArr = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];

// 1) Sort an array from smallest number to largest.
    function leastToGreatest(arr) {
        return arr.sort((a, b) => a - b);
    };

    console.log(leastToGreatest(numArr));

// 2) Sort an array from largest number to smallest.
    function greatestToLeast(arr) {
        return arr.sort((a, b) => b - a);
    };

    console.log(greatestToLeast(numArr));

// 3) Sort an array from shortest string to longest.
    function lengthSort(arr) {
        return arr.sort((a, b) => a.length - b.length);
    };

    console.log(lengthSort(strArr));

// 4) Sort an array alphabetically.
    function alphabeticalSort(arr) {
        return arr.sort()
    }

    console.log(alphabeticalSort(strArr));

// 5) Sort the objects in the array by age.
    function ageSort(arr){
        return arr.sort((a, b) => a.age - b.age)
    }

    console.log(ageSort(personArr));