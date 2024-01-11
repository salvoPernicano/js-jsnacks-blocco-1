const arrayNumeri = [2, 7, 1, 9, 4, 6];
let riordine = arrayNumeri.filter(function(v,i){
    return i % 2 == 0;
});
let somma = 0;
for (let i=0; i < riordine.length; i++){
    somma += riordine[i]
}
console.log(somma)






