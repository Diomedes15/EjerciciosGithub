// Pedimos los datos al usuario
var numero1 = Number(prompt("Introduce el primer número:"));
var operador = prompt("Introduce el operador (+, -, *, /):");
var numero2 = Number(prompt("Introduce el segundo número:"));
// Calculamos el resultado según el operador
var resultado;
if (operador === "+") {
    resultado = numero1 + numero2;
}
else if (operador === "-") {
    resultado = numero1 - numero2;
}
else if (operador === "*") {
    resultado = numero1 * numero2;
}
else if (operador === "/") {
    resultado = numero1 / numero2;
}
else {
    alert("Operador no válido");
    throw new Error("Operador incorrecto");
}
// Mostramos el resultado en un alert
alert("".concat(numero1, " ").concat(operador, " ").concat(numero2, " = ").concat(resultado));
