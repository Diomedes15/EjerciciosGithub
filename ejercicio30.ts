let frase1: string = "Scemo, pulisci la tua casa";
let frase2: string = "Dovresti guardare una serie";
let letra: string = "i";

function compararTextos (texto1: string, texto2: string, coincidencia: string): string { 
    const textoMinus1: string = texto1.toLowerCase()
    const textoMinus2: string = texto2.toLowerCase()
    const letraMinus: string = coincidencia.toLowerCase()

    let contador1: number = 0;

    for (let i = 0; i < texto1.length; i++) {

        if (textoMinus1.charAt(i) === letraMinus) {
            contador1++
        }
    }

    let contador2: number = 0;

    for (let i = 0; i < texto2.length; i++) {

        if (textoMinus2.charAt(i) === letraMinus) {
            contador2++
        }
    }

    if (contador1 > contador2){
        return `La frase con más coincidencias es: ${texto1}`;
    } else {
        return `La frase con más coincidencias es: ${texto2}`;
    }

}

console.log(compararTextos(frase1, frase2, letra));