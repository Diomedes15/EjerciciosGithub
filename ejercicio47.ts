const numeros : number[] = [-10, -5, -3, -1, 0, 0, 0, 2, 4, 7, 15, -8, 9, -2, 0, 11];

let contadorNegativos : number = 0;
let contadorCeros : number = 0;
let contadorPositivos : number = 0;

for (let numero of numeros) {
    if (numero < 0){
        contadorNegativos++
    } else if (numero > 0){
        contadorPositivos++
    } else (
        contadorCeros++
    )
}

console.log(`Hay ${contadorNegativos} números negativos, ${contadorCeros} ceros y ${contadorPositivos} números positivos.`);