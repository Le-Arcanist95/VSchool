let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(people, alphabet){
    let output = []
    for(i = 0; i < arguments[0].length; i++){
        people.shift(output);

        for(i2 = 0; i2 < arguments[1].length; i++){
            let upperCase = alphabet.toUpperCase();
            let newAlphabet = upperCase.split("");
            output.concat(newAlphabet);
        };
    };
    return output;
};
console.log(forception(people, alphabet));