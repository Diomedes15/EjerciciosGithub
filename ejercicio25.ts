let cadena1: string = "noruega";
let cadena2: string = "austria";
let cadena3: string = "italia";

function combinarCadenas (cad1: string, cad2: string, cad3: string): string {
    if (cad1.length <5 || cad2.length <5 || cad3.length <5){
        return "error";
    } else {
    const mayus1 : string = cad1.charAt(0).toUpperCase() + cad1.slice(1,3);
    const mayus2 : string = cad2.charAt(0).toUpperCase() + cad2.slice(1,3);
    const mayus3 : string = cad3.charAt(0).toUpperCase() + cad3.slice(1,3);

    return mayus1 + mayus2 + mayus3;
    }
}

console.log(combinarCadenas(cadena1, cadena2, cadena3));