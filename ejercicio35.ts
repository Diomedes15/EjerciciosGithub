// Cuando se haga clic en el botón, calculamos
const boton = document.getElementById("calcular") as HTMLButtonElement;

boton.addEventListener("click", () => {
  // Obtenemos los valores de los inputs
  const num1 = Number((document.getElementById("num1") as HTMLInputElement).value);
  const num2 = Number((document.getElementById("num2") as HTMLInputElement).value);
  const operador = (document.getElementById("operador") as HTMLSelectElement).value;

  let resultado: number | string;

  // Hacemos la operación
  switch (operador) {
    case "+": resultado = num1 + num2; break;
    case "-": resultado = num1 - num2; break;
    case "*": resultado = num1 * num2; break;
    case "/":
      resultado = num2 !== 0 ? num1 / num2 : "Error: división por 0";
      break;
    default:
      resultado = "Operador no válido";
  }

  // Mostramos el resultado en el <p id="resultado">
  const p = document.getElementById("resultado") as HTMLParagraphElement;
  p.textContent = `${num1} ${operador} ${num2} = ${resultado}`;
});