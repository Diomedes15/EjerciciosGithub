// Pedimos los datos al usuario
const numero1 = Number(prompt("Introduce el primer número:"));
const operador = prompt("Introduce el operador (+, -, *, /):");
const numero2 = Number(prompt("Introduce el segundo número:"));

// Calculamos el resultado según el operador
let resultado: number;

if (operador === "+") {
  resultado = numero1 + numero2;
} else if (operador === "-") {
  resultado = numero1 - numero2;
} else if (operador === "*") {
  resultado = numero1 * numero2;
} else if (operador === "/") {
  resultado = numero1 / numero2;
} else {
  alert("Operador no válido");
  throw new Error("Operador incorrecto");
}

// Mostramos el resultado en un alert
alert(`${numero1} ${operador} ${numero2} = ${resultado}`);