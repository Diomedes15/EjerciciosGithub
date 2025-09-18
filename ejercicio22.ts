let palabra: string = "dia maravilloso";
let numero1: number = 5;
let numero2: number = 12;

function trozoPalabra (a: string, b: number, c: number): string {
    return a.slice(b - 1, c);
}

console.log(trozoPalabra(palabra, numero1, numero2))