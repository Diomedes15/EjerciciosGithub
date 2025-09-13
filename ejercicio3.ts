const numero: number = 7;

if (numero < 5) {
    console.log("suspendido");
} else if (numero >= 5) {
    console.log("aprobado");
} else if (numero == 10) {
    console.log("excelente");
} else if (numero > 10 || numero < 0) {
    console.log("Nota incorrecta");
}