let texto: string = "Polnareff es el mejor";

function guiones (valor: string): string {
    return valor.split("").join("-");
}

console.log(guiones(texto));