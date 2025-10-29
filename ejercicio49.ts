const palabras : string[] = ["Trigo", "Baraja", "Meteorito", "Brillante", "Luz"];
const numero : number = Math.floor(Math.random() * palabras.length);
const palabraElegida : string[] = [...palabras[numero]];
let palabraSecreta : string[] = Array(palabraElegida.length).fill("_");
let contadorVidas : number = 3;

function comprobarLetra(letra: string){
    const letraMinus : string = letra.toLowerCase();
    const palabraMinus : string[] = palabraElegida.map(hola => hola.toLowerCase());
    let contador: number = -1;
    let existe: boolean = false;

    for (let posicion of palabraMinus){
        contador++
            if (posicion === letraMinus){
                palabraSecreta[contador] = letraMinus;
                existe = true;
            }
    }

    if (!existe) contadorVidas--;
}

while (contadorVidas > 0 && palabraSecreta.includes("_")){
    alert(`${palabraSecreta}.
        Te quedan ${contadorVidas} vidas`);
    const letra : string = prompt("Intenta adivinar la palabra (escribe una letra):");
    comprobarLetra(letra);
}

if (!palabraSecreta.includes("_")) alert(`¡Enhorabuena! Has ganado, la palabra era ${palabraElegida.join("")}`);
if (contadorVidas == 0) alert(`Has perdido, la palabra era ${palabraElegida.join("")}`);



