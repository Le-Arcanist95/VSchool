// Write a function that takes an array of numbers and returns the largest (without using Math.max())
    function findLargestNum(arr) {
        let maxNum = 0;

        arr.forEach((e) => {
            if(e > maxNum) {
                maxNum = e;
            };
        });

        return maxNum;
    };

    console.log(findLargestNum([3, 5, 2, 8, 1]));

// Write a function that takes an array of words and a character and returns each word that has that character present.
    function findMatchingStrings(arr, str) {
        let matchedArr = [];

        arr.forEach((e) => {
            if(e.includes(str)) {
                matchedArr.push(e);
            };
        });

        return matchedArr;
    };

    console.log(findMatchingStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
    function isDivisible(num1, num2) {
        if (num1 % num2 === 0) {
            return true;
        } else {
            return false;
        };
    };

    console.log(isDivisible(9, 3));
    console.log(isDivisible(15, 4));