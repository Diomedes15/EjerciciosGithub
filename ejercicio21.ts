let palabra: string = "Cursiva";
let numero: number = 4;

function letraAsignada (a: string, b: number): string {
    return a[b - 1];
}

console.log(letraAsignada(palabra, numero))