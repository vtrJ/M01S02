let contador = 0;


for (let i = 1; i <= 1000; i++) {
    
    let primo = true;

    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            primo = false;
            break;
        }
    }

    
    if (primo) {
        console.log(i);
        contador++;
    }
}


console.log("Números primos entre 1 e 1000: " + contador);