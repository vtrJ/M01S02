let soma = 0;


let num = parseInt(prompt("Digite um número (ou -1 para sair):"));


while (num !== -1) {
    
    soma += num;
    num = parseInt(prompt("Digite outro número (ou -1 para sair):"));
}

alert("A soma dos números digitados é: " + soma);