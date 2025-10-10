// Cuando se haga clic en el botón, calculamos
var boton = document.getElementById("calcular");
boton.addEventListener("click", function () {
    // Obtenemos los valores de los inputs
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var operador = document.getElementById("operador").value;
    var resultado;
    // Hacemos la operación
    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num2 !== 0 ? num1 / num2 : "Error: división por 0";
            break;
        default:
            resultado = "Operador no válido";
    }
    // Mostramos el resultado en el <p id="resultado">
    var p = document.getElementById("resultado");
    p.textContent = "".concat(num1, " ").concat(operador, " ").concat(num2, " = ").concat(resultado);
});
