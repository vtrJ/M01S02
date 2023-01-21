
let limit = parseInt(prompt("Até qual número você deseja contar pares e ímpares?"));


let even = 0;
let odd = 0;


for (var i = 0; i <= limit; i++) {
    
    if (i % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}


alert("Entre 0 e " + limit + " existem " + even + " números pares e " + odd + " números ímpares.");

