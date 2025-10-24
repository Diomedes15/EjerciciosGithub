let numero = Number(prompt("Inserte un número para calcular su exponente:"));
let exponencial : number = 1;

while (0 < numero){
    exponencial = exponencial * numero;
    numero--;
}

console.log(exponencial);