var botones = document.querySelectorAll(".numero, .operador");
var calcular = document.getElementById("calcular");
var pantalla = document.getElementById("pantalla");
var coma = document.getElementById("coma");
var borrar = document.getElementById("borrar");
var operadores = [".", "+", "-", "*", "/"];
var historial = "";
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        var valor = boton.value;
        historial += valor;
        pantalla.value = historial;
    });
});
coma.addEventListener("click", function () {
    var ultimo = historial[historial.length - 1];
    //if (!operadores.includes(ultimo)) {
    if (operadores.indexOf(ultimo) === -1) {
        historial += ".";
        pantalla.value = historial;
    }
});
calcular.addEventListener("click", function () {
    var resultado = eval(historial);
    pantalla.value = resultado;
    //la linea que hay abajo me ha costado sangre sudor y lágrimas
    historial = resultado;
});
borrar.addEventListener("click", function () {
    historial = "";
    pantalla.value = "";
});
