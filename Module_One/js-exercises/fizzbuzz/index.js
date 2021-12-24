countArrObj = {
    fizzBuzz: 0,
    fizz: 0,
    buzz: 0
}

for(let i = 0; i < 100;)
    console.log(
        (++i % 3 ? "" : "Fizz" ) + ( i%5 ? "" : "Buzz" ) || i 
    )