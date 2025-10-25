const cadena: string[] = ["Aquí no", "Aquí tampoco", "A la derecha", "A la izquierda"];
const palabra: string = "Aquí estoy";
const numero: number = 3;

function meterEnLista (array: string[], valor: string, posicion: number){
    array.splice(posicion, 0, valor);
}

meterEnLista(cadena, palabra, numero);
console.log(cadena);