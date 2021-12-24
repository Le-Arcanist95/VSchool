const countArrObj = {
    fizzbuzz: 0,
    fizz: 0,
    buzz: 0
}

for(let i = 0; i < 100;) {
    let value = '';

    value = ((++i%3 ? '' : "fizz") + (i%5 ? '' : "buzz"));

    switch(value) {
        case "fizzbuzz":
            countArrObj.fizzbuzz++;
            console.log(value);
            break;
        case "fizz":
            countArrObj.fizz++;
            console.log(value);
            break;
        case "buzz":
            countArrObj.buzz++;
            console.log(value);
            break;
        default:
            value = i
            console.log(value);
    }
};

console.log(countArrObj);