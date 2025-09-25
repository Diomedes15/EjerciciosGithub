let frase: string = "Me gusta estar en mi casa";
let palabra: string = "casa";

function encontrarPalabra (texto: string, coincidencia: string): number { 
    const textoMinus: string = texto.toLowerCase()
    const palabraMinus: string = coincidencia.toLowerCase()
    const posicion: number = textoMinus.indexOf(palabraMinus)

    return posicion;
}

console.log(encontrarPalabra(frase, palabra));