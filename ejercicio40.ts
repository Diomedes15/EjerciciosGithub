const base = Number(prompt("Inserte un número:"));
let exponente = Number(prompt("Inserte su exponente:"));

let resultado : number = 1;

while (0 < exponente) {
    resultado = resultado * base;
    exponente--;
}

console.log(resultado);