let texto: string = "Polnareff es el mejor";

function guiones (valor: string): string {
    const separarPalabras: string[] = valor.split(" ");
    const nuevas : string[] = [];

    for (const palabras of separarPalabras){
        nuevas.push(palabras.split("").join("-"));
    }

    return nuevas.join(" ");

}

console.log(guiones(texto));