const fruits = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
    let storedVegetable = vegetables.pop();
    console.log(storedVegetable);

// 2. Remove the first item from the fruit array.
    let storedFruit = fruits.shift();
    console.log(storedFruit);

// 3. Find the index of "orange."
    let orangeIndex = fruits.indexOf("orange");
    console.log(orangeIndex);

// 4. Add that number to the end of the fruit array.
    fruits.push(orangeIndex);
    console.log(fruits);

// 5. Use the length property to find the length of the vegetable array.
    let vegetablesLength = vegetables.length; 
    console.log(vegetablesLength);

// 6. Add that number to the end of the vegetable array.
    vegetables.push(vegetablesLength);
    console.log(vegetables);

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
    const food = fruits.concat(vegetables);
    console.log(food);

// 8. Remove 2 elements from your new array starting at index 4 with one method.
    food.splice(4, 2);
    console.log(food);

// 9. Reverse your array.
    food.reverse();
    console.log(food);

// 10. Turn the array into a string and return it.
    let stringFoods = food.toString();
    console.log(stringFoods);