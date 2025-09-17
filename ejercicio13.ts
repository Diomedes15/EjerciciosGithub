let parametro1: boolean = true;
let parametro2: boolean = true;

function comprobar (a: boolean, b: boolean): boolean {
    if (a === true && b === true){
        return false;
    } else {
        return true;
    }
}

console.log(comprobar(parametro1, parametro2))