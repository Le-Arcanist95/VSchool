const countArrObj = {
    fizzbuzz: 0,
    fizz: 0,
    buzz: 0
}

for(let i = 0; i < 100;) {
    let value = i;

    value = ((++i%3 ? '' : "fizz") + (i%5 ? '' : "buzz"));

    if (value === "fizzbuzz") {
        countArrObj.fizzbuzz++;
        console.log(value);
    } else if (value === "fizz") {
        countArrObj.fizz++;
        console.log(value);
    } else if (value === "buzz") {
        countArrObj.buzz++;
        console.log(value);
    } else {
        console.log(i)
    };
};

console.log(countArrObj);