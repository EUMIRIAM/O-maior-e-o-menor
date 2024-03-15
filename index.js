const entrada = require("prompt-sync")({ sigint: true });
let n1 = parseFloat(entrada("informe um numero: "));
let n2 = parseFloat(entrada("informe um numero: "));
let n3 = parseFloat(entrada("informe um numero: "));
console.log("RESULTADO DO ALGORITMO");
if (n1 > n2 && n1 > n3) {
  console.log("O  maior  numero é: ", n1);
} else if (n2 > n1 && n2 > n3) {
  console.log("O maior numero é: ", n2);
} else {
  console.log("O maior numero é: ", n3);
}
//verifica qual numero é o menor
if (n1 < n2 && n1 < n3) {
  console.log("o menor numero é: ", n1);
} else if (n2 < n1 && n2 < n3) {
  console.log("O menor numero é: ", n2);
} else {
  console.log("O menor numero é: ", n3);
}
