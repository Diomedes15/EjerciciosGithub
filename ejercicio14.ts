let parametro1: boolean = true;
let parametro2: boolean = false;

function comprobar (a: boolean, b: boolean): boolean {
    if (a === false && b === false){
        return true;
    } else {
        return false;
    }
}

console.log(comprobar(parametro1, parametro2))
