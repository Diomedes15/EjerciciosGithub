let cadena1: string = "Mi personaje favorito es Jojo";
let cadena2: string = "Mi personaje favorito es Dio";
let cadena3: string = "Mi personaje favorito es Jean Pierre Polnareff";

function compararCadenas (cad1: string, cad2: string, cad3: string): string {
    const longitud1: number = cad1.length;
    const longitud2: number = cad2.length;
    const longitud3: number = cad3.length;
    if (longitud1 > longitud2 && longitud1 > longitud3){
        return `La cadena de texto más larga es: ${cad1}`;
    } else if (longitud2 > longitud1 && longitud2 > longitud3){
        return `La cadena de texto más larga es: ${cad2}`;
    } else if (longitud3 > longitud1 && longitud3 > longitud2){
        return `La cadena de texto más larga es: ${cad3}`;
    } else if (longitud1 == longitud2 && longitud1 > longitud3){
        return `Las cadenas de texto más largas son: ${cad1} y ${cad2}`;
    }else if (longitud2 == longitud3 && longitud2 > longitud1){
        return `Las cadenas de texto más largas son: ${cad2} y ${cad3}`;
    }

    return `Las tres cadenas de texto son iguales`;
}

console.log(compararCadenas(cadena1, cadena2, cadena3))
