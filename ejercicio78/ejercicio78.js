var entrada1 = document.getElementById("entrada1");
var entrada2 = document.getElementById("entrada2");
var operador = document.getElementById("operadores");
var pantalla = document.getElementById("salida");
function calcular() {
    if (entrada1.value !== "" && entrada2.value !== "") {
        var operacion = "".concat(entrada1.value).concat(operador.value).concat(entrada2.value);
        var resultado = eval(operacion);
        pantalla.value = String(resultado);
    }
    else {
        pantalla.value = "";
    }
}
entrada1.addEventListener("input", calcular);
entrada2.addEventListener("input", calcular);
operador.addEventListener("change", calcular);
