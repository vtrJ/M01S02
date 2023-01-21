let InitialValue = prompt("Insira o valor inicial:");
let raiz = prompt("Insira o valor da raiz:");
let term = InitialValue;
console.log(term);
for (var i = 1; i < 10; i++) {
   term += raiz;
   console.log(term);
}
