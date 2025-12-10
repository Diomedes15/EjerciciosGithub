const botones = document.querySelectorAll(".numero, .operador");
const calcular = document.getElementById("calcular") as HTMLButtonElement;
const pantalla = document.getElementById("pantalla") as HTMLInputElement;
const coma = document.getElementById("coma") as HTMLButtonElement;
const borrar = document.getElementById("borrar") as HTMLButtonElement;
const operadores = [".", "+", "-", "*", "/"];
let historial: string = "";

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = (boton as HTMLButtonElement).value; 
        historial += valor; 
        pantalla.value = historial;
    });
});


coma.addEventListener("click", () => {
    const ultimo = historial[historial.length - 1];
    //if (!operadores.includes(ultimo)) {
    if (operadores.indexOf(ultimo) === -1) {
        historial += ".";
        pantalla.value = historial;
    }
});

calcular.addEventListener("click", () => {
    const resultado = eval(historial);
    pantalla.value = resultado;
    //la linea que hay abajo me ha costado sangre sudor y lágrimas
    historial = resultado;
});

borrar.addEventListener("click", () => {
    historial = "";
    pantalla.value = "";
});