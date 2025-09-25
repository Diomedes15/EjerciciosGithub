let palabra: string = "Anciana";
let letra: string = "a";

function contarLetra (texto: string, coincidencia: string): number { 
    const palabraMinus: string = texto.toLowerCase()
    const letraMinus: string = coincidencia.toLowerCase()

    let contador: number = 0;

    for (let i = 0; i < texto.length; i++) {

        if (palabraMinus.charAt(i) === letraMinus) {
            contador++
        }
    }
    
    return contador;
}

console.log(contarLetra(palabra, letra));