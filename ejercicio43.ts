let valor1 : string | null = prompt("Escribe el primer objeto del array");
let valor2 : string | null = prompt("Escribe el segundo objeto del array");

function unirValores (valor1: string, valor2: string): string[]{
    const cadena: string[] = [valor1, valor2];
    return cadena;
}

unirValores(valor1, valor2)