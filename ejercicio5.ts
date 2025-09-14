const num1: number = 10;
const num2: number = 20;
const operador: string = "*";

switch (operador) {
    case "+":
        console.log("resultado =", num1 + num2);
        break;
    case "-":
        console.log("resultado =", num1 - num2);
        break;
    case "*":
        console.log("resultado =", num1 * num2);
        break;
    case "/":
        console.log("resultado =", num1 / num2);
        break;
    default:
        console.log("operador no encontrado");
}

