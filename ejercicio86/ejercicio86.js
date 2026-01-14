const div = document.getElementById("centrar");
const turnoTexto = document.getElementById("turno");
const celdas = document.querySelectorAll(".celda");
const numeroAleatorio = Math.floor(Math.random() * 2) + 1;
let turnoMaquina = false;
if (numeroAleatorio === 1) {
    turnoMaquina = true;
    turnoTexto.textContent = "Empieza la máquina";
}
function comprobarTablero() {
    const estado = Array.from(celdas).map(celda => {
        const img = celda.querySelector("img");
        if (!img)
            return null;
        if (img.src.includes("cruz"))
            return "X";
        if (img.src.includes("cero"))
            return "O";
    });
    const combinaciones = [
        [0, 1, 2], // fila 1
        [3, 4, 5], // fila 2
        [6, 7, 8], // fila 3
        [0, 3, 6], // columna 1
        [1, 4, 7], // columna 2
        [2, 5, 8], // columna 3
        [0, 4, 8], // diagonal 1
        [2, 4, 6] // diagonal 2
    ];
    for (let combinacion of combinaciones) {
        let a = combinacion[0];
        let b = combinacion[1];
        let c = combinacion[2];
        if (estado[a] === "X" && estado[b] === "X" && estado[c] === "X") {
            turnoTexto.textContent = "¡Ha ganado el jugador!";
            celdas.forEach(celda => {
                celda.disabled = true;
            });
        }
        else if (estado[a] === "O" && estado[b] === "O" && estado[c] === "O") {
            turnoTexto.textContent = "¡Ha ganado la máquina!";
            celdas.forEach(celda => {
                celda.disabled = true;
            });
        }
    }
}
function celdasLibres() {
    return Array.from(celdas).filter(celda => celda.children.length === 0);
}
function jugarMaquina() {
    const libres = celdasLibres();
    const celdaElegida = libres[Math.floor(Math.random() * libres.length)];
    const crearImagenM = document.createElement("img");
    crearImagenM.src = "cero.png";
    celdaElegida.appendChild(crearImagenM);
    celdaElegida.disabled = true;
    turnoTexto.textContent = "Es el turno del jugador";
    turnoMaquina = false;
}
celdas.forEach(celda => {
    celda.addEventListener("click", () => {
        const crearImagen = document.createElement("img");
        crearImagen.src = "cruz.png";
        celda.appendChild(crearImagen);
        turnoTexto.textContent = "Es el turno de la máquina";
        turnoMaquina = true;
        comprobarTablero();
        if (!turnoTexto.textContent.includes("ganado")) {
            setTimeout(() => {
                jugarMaquina();
            }, 700);
            comprobarTablero();
        }
    });
});
