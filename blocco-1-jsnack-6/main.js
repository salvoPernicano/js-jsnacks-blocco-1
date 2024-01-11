let userInput = prompt("give me a number");
let userInputInt = parseInt(userInput);
const arrayCubo = [];
arrayCubo.push(userInputInt);
let somma = userInputInt;


for (let i = 1; i < userInputInt; i++){
    let CNumber = userInputInt - i;
    arrayCubo.push(CNumber);
    somma += arrayCubo[i]
}
console.log(Math.pow(somma, 3));



