let cadena1: string = "noruega";
let cadena2: string = "austria";
let cadena3: string = "italia";

function combinarCadenas2 (cad1: string, cad2: string, cad3: string): string {
    if (cad1.length <5 || cad2.length <5 || cad3.length <5){
        return "error";
    } else {
    const mayus1 :  string = cad1.slice(cad1.length - 3,cad1.length - 1) + cad1.charAt(cad1.length - 1).toUpperCase();
    const mayus2 :  string = cad2.slice(cad2.length - 3,cad2.length - 1) + cad2.charAt(cad2.length - 1).toUpperCase();
    const mayus3 :  string = cad3.slice(cad3.length - 3,cad3.length - 1) + cad3.charAt(cad3.length - 1).toUpperCase();

    return mayus1 + mayus2 + mayus3;
    }
}

console.log(combinarCadenas2(cadena1, cadena2, cadena3));