const  cognomi =  ["Frodo", "Aragorn", "Gandalf", "Legolas", "Gimli", "Samwise", "Boromir", "Merry", "Pippin", "Faramir"];
const  nomi = ["Baggins", "Strider", "Grey", "Greenleaf", "Gloin", "Gamgee", "Denethor", "Brandybuck", "Took", "Hethelion"];
let numeroNomi = parseInt(prompt("quanti nomi vuoi?"))

for (let i = 0; i < numeroNomi; i++){
    let randomCognome = cognomi[Math.floor(Math.random()* cognomi.length)];
    let randomNome = nomi[Math.floor(Math.random()*nomi.length)];
    console.log(`${randomCognome} ${randomNome} `)
}