
let num = prompt("Digite a tabuada desejada:");

let tabuada = "";

for (var i = 1; i <= 10; i++) {
  tabuada += num + " x " + i + " = " + (num * i) + "\n";
}

alert(tabuada);
