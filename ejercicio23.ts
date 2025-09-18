let texto: string = "claseDeIngles";

function unirMinusculaMayuscula (valor: string): string {
    const textoMinuscula: string = valor.toLowerCase();
    const textoMayuscula: string = valor.toUpperCase();
    return textoMinuscula + "-" + textoMayuscula;
    // o `${textoMinuscula}-${textoMayuscula}`
}

console.log(unirMinusculaMayuscula(texto))