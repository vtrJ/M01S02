
let operation = prompt("Qual tipo de cálculo você deseja fazer? (+, -, *, /)");


let value1 = parseFloat(prompt("Qual é o primeiro valor que você deseja calcular?"));


let value2 = parseFloat(prompt("Qual é o segundo valor que você deseja calcular?"));


let result;

if (operation === "+") {
    result = value1 + value2;
} else if (operation === "-") {
    result = value1 - value2;
} else if (operation === "*") {
    result = value1 * value2;
} else if (operation === "/") {
    result = value1 / value2;
}

alert("O resultado do seu cálculo é: " + result);
