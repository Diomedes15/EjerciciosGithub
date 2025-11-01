const numeros : number[] = [1, 2, 3, 4, 5];

const media : number = numeros.reduce((acumulador, numero) => acumulador + numero, 0) / numeros.length;

console.log(media);