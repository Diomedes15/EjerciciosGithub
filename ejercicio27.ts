let palabra: string = "Antílope";
let letra: string = "a";

function encontrarLetra (texto: string, coincidencia: string): string { 
    const palabraMinus: string = texto.toLowerCase()
    const letraMinus: string = coincidencia.toLowerCase()
    const siono: boolean = palabraMinus.includes(letraMinus);
    if (siono == true){
        return `La palabra ${texto} tiene la letra ${coincidencia}`;
    } else {
        return `La palabra ${texto} no tiene la letra ${coincidencia}`;
    }
}

console.log(encontrarLetra(palabra, letra));