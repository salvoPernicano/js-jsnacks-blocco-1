let userInput = prompt("give me a number");
let userInputInt = parseInt(userInput);
const arrayCubo = [];
arrayCubo.push(userInputInt);


for (let i = 1; i < userInputInt; i++){
    let CNumber = userInputInt - i;
    arrayCubo.push(CNumber);
}

console.log(arrayCubo);

