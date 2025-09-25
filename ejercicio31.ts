let frase1: string = "magician red";
let frase2: string = "star platinum";
let frase3: string = "hierophant green";

function juntarTextos (texto1: string, texto2: string, texto3: string): string { 
    const palabras1: string = texto1.split(" ")[0];
    const palabras2: string = texto2.split(" ")[0];
    const palabras3: string = texto3.split(" ")[0];

    return `${palabras1} ${palabras2} ${palabras3}`;
}

console.log(juntarTextos(frase1, frase2, frase3));

// Al principio lo iba a poner de esta manera pero he buscado como se ponía junto:
// let frase = "magician red";
// let palabras = frase.split(" ");
// let primeraPalabra = palabras[0];
