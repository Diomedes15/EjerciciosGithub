const botones = document.querySelectorAll(".boton");
const tablero = document.getElementById("tablero");
const texto = document.getElementById("texto");
const circulo = document.getElementById("circulo");
let combinaciones = [];
let combinacionesJugador = [];
let ronda = 0;
circulo.textContent = ronda.toString();
setTimeout(nuevaRonda, 700);
function nuevaRonda() {
    tablero.classList.add("bloqueado");
    const numeroAleatorio = Math.floor(Math.random() * botones.length);
    combinaciones.push(numeroAleatorio);
    combinaciones.forEach((combinacion, indice) => {
        setTimeout(() => {
            botones[combinacion].classList.add("activo");
        }, indice * 800);
        setTimeout(() => {
            botones[combinacion].classList.remove("activo");
        }, indice * 800 + 400);
    });
    setTimeout(() => {
        tablero.classList.remove("bloqueado");
        combinacionesJugador = [];
    }, combinaciones.length * 800);
}
function comprobarJugada() {
    const i = combinacionesJugador.length - 1;
    if (combinacionesJugador[i] !== combinaciones[i]) {
        tablero.classList.add("bloqueado");
        texto.textContent = "¡Has perdido!";
        return;
    }
    if (combinacionesJugador.length === combinaciones.length) {
        ronda++;
        circulo.textContent = ronda.toString();
        setTimeout(nuevaRonda, 1000);
    }
}
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        boton.classList.add("activo");
        setTimeout(() => boton.classList.remove("activo"), 200);
        const numero = Number(boton.id.split("-")[1]);
        combinacionesJugador.push(numero);
        comprobarJugada();
    });
});
