const entrada1 = document.getElementById("entrada1") as HTMLInputElement;
const entrada2 = document.getElementById("entrada2") as HTMLInputElement;
const operador = document.getElementById("operadores") as HTMLSelectElement;
const pantalla = document.getElementById("salida") as HTMLInputElement;

function calcular(){
if (entrada1.value !== "" && entrada2.value !== "") {
    
    const operacion = `${entrada1.value}${operador.value}${entrada2.value}`
    const resultado = eval(operacion)

    pantalla.value = String(resultado);
} else {
    pantalla.value = "";
}
}

entrada1.addEventListener("input", calcular);
entrada2.addEventListener("input", calcular);
operador.addEventListener("change", calcular);





