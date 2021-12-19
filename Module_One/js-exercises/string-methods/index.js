// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
function capitalizeAndLowercase(str) {
    let upperCase = str.toUpperCase();
    let lowerCase = str.toLowerCase();
    let output = upperCase.concat(lowerCase);
    return output;
};
console.log(capitalizeAndLowercase("HelLo")); // => "HELLOhello"

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
function findMiddleIndex(str) {
    let middleIndex = Math.floor(str.length / 2);
    return middleIndex;
}
console.log(findMiddleIndex("Hello")); // => 2
console.log(findMiddleIndex("Hello World")); // => 5

// Write a function that uses `[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)` and the other functions you've written to return the first half of the given string.
function returnFirstHalf(str) {
    let middleIndex = findMiddleIndex(str);
    let firstHalf = str.slice(0, middleIndex);   
    return firstHalf;
}

console.log(returnFirstHalf("Hello")); // => "He"
console.log(returnFirstHalf("Hello World")); // => "Hello"

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
function capitalizeAndLowercaseSplit(str) {
    let middleIndex = null;
    if (str.length % 2 === 0) {
        middleIndex = findMiddleIndex(str);
    } else {
        middleIndex = Math.floor(findMiddleIndex(str));
    }
    let firstHalf = str.slice(0, middleIndex);
    let secondHalf = str.slice(middleIndex);
    let capital = firstHalf.toUpperCase();
    let lower = secondHalf.toLowerCase();
    let output = capital.concat(lower);
    return output;
};

console.log(capitalizeAndLowercaseSplit("Hello")); // => "HEllo"
console.log(capitalizeAndLowercaseSplit("Hello World")); // => "HELLO world"

// Write a function that takes a string as a parameter and capitalizes any character that follows a space.
function capitalize(str) {
    let splitStr = str.split(' ');
    let corrections = [];
    for (let i = 0; i < splitStr.length; i++) {
        corrections.push(splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1));
    };
    let output = corrections.join(' ');
    return output;
}

console.log(capitalize("hey friends! practice practice practice!")) // -> "Hey Friends! Practice Practice Practice!"