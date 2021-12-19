// # **Preliminaries**

// 1. Write a for loop that prints to the console the numbers 0 through 9.
    for (let i = 0; i < 10; i++) {
        console.log(i);
    };

// 2. Write a for loop that prints to the console 9 through 0.
    for (let i = 9; i >= 0; i--) {
        console.log(i);
    };

// 3. Write a for loop that prints these fruits to the console. 
    const fruit = ["banana", "orange", "apple", "kiwi"];
    for (let i = 0; i < fruit.length; i++) {
        console.log(fruit[i]);
    };



// # **Bronze Medal**

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
    const numbersArr = [];
    for (let i = 0; i < 10; i++) {
        numbersArr.push(i);
    };
    console.log(numbersArr);

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
    for (let i = 0; i <= 100; i++) {
        if(i % 2 === 0) {
            console.log(i);
        };
    };

// 3. Write a for loop that will push every other fruit to an array.
    const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
    const selectFruits = [];
    for (let i = 0; i < fruits.length; i++) {
        if (i % 2 !== 0) {
            selectFruits.push(fruits[i]);
        };
    };
    console.log(fruits);
    console.log(selectFruits);



// # **Silver Medal**

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];

// 1. Write a loop that will print out all the names of the people of the people array
  for (let i = 0; i < peopleArray.length; i++) {
      console.log(peopleArray[i].name);
  };

// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
  const names = [];
  const occupations = [];
  for (let i = 0; i < peopleArray.length; i++) {
      names.push(peopleArray[i].name);
      occupations.push(peopleArray[i].occupation);
  }
  console.log(names);
  console.log(occupations);

// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".
    const newArrOne = [];
    const newArrTwo = [];
    for (let i = 0; i < peopleArray.length; i++) {
        if (i % 2 === 0) {
            newArrOne.push(peopleArray[i].name);
        } else {
            newArrTwo.push(peopleArray[i].occupation);
        }
    }
    console.log(newArrOne);
    console.log(newArrTwo);


    
// # **Gold Medal - Nesting**
    
// 1. Create an array that mimics a grid like the following using nested `for` loops:
// ```
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]
// ```
    let grid = [[], 
                [], 
                []];
    for (i = 0; i < grid.length; i++){
        for (i2 = 0; i2 < 3; i2++){
            grid[i][i2] = 0;
        };    
    };
    console.log(grid);
// 2.Create an array that mimics a grid like the following using nested `for` loops:
// ```
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]
// ```
    for(i = 0; i < grid.length; i++){
        for(i2 = 0; i2 < grid.length; i2++){
            grid[i][i2] = i;
        };
    };
    console.log(grid);
// 3.Create an array that mimics a grid like the following using nested `for` loops:
// ```
// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]
// ```
    for(i = 0; i < grid.length; i++){
        for(i2 = 0; i2 < grid.length; i2++){
            grid[i][i2] = i2;
        } 
    }
    console.log(grid);
// 1. Given a grid like the previous ones, write a nested `for` loop that would change every number to an x.
// ```
// [["x", ...],
// ["x", ...],
// ["x",...], ...]
// ```
    for (i = 0; i < grid.length; i++){
        for (i2 = 0; i2 < grid.length; i2++){
            grid[i][i2] = "x";
        }    
    }
    console.log(grid);