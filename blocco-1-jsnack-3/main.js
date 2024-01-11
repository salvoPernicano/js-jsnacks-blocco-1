let userNumberArray = []
let somma = 0;
for (let i = 0; i < 10; i++){

    let userNumber = prompt("Give me a number");
    let userNumberInt = parseInt(userNumber);
    
    userNumberArray.push(userNumberInt);
    somma += userNumberArray[i];
}
prompt(`your total is ${somma}`)




