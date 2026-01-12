const turnoTexto = document.getElementById("turno") as HTMLHeadingElement;
const celdas = document.querySelectorAll<HTMLButtonElement>(".celda");
const div = document.getElementById("centrar") as HTMLDivElement;
let turno: boolean = true;

function partidaNueva () {
    const crearBoton = document.createElement("button");
    div.appendChild(crearBoton);
    crearBoton.textContent = "Partida Nueva";
    crearBoton.addEventListener("click", () => {
            celdas.forEach(celda => {
                celda.disabled = false;
                celda.innerHTML = "";
            });
            turnoTexto.textContent = "Es el turno de: O";
            turno = true;
            crearBoton.classList.add("esconder")
    });
}

function comprobarTablero () {
    const estado = Array.from(celdas).map(celda =>{
        const img = celda.querySelector<HTMLImageElement>("img");
        if (!img) return null;
        if (img.src.includes("cruz")) return "X";
        if (img.src.includes("cero")) return "O";
    });

    const combinaciones: number[][] = [
        [0, 1, 2], // fila 1
        [3, 4, 5], // fila 2
        [6, 7, 8], // fila 3
        [0, 3, 6], // columna 1
        [1, 4, 7], // columna 2
        [2, 5, 8], // columna 3
        [0, 4, 8], // diagonal 1
        [2, 4, 6]  // diagonal 2
    ];

    for (let combinacion of combinaciones) {

        let a: number = combinacion[0];
        let b: number = combinacion[1];
        let c: number = combinacion[2];

        if (estado[a] === "X" && estado[b] === "X" && estado[c] === "X") {
            turnoTexto.textContent = "¡Ha ganado el jugador X!";
            celdas.forEach(celda => {
                celda.disabled = true;
            });
            partidaNueva();
        } else if (estado[a] === "O" && estado[b] === "O" && estado[c] === "O"){
            turnoTexto.textContent = "¡Ha ganado el jugador O!";
            celdas.forEach(celda => {
                celda.disabled = true;
            });
            partidaNueva();
        }
    }
}

celdas.forEach(celda => {
    celda.addEventListener("click", () => {
        const crearImagen = document.createElement("img");
        if (turno){
            if (celda.children.length > 0) {
                const imgActual = celda.querySelector<HTMLImageElement>("img");
                if(!imgActual) return;
                imgActual.src = "cero.png";
            } else {
                crearImagen.src = "cero.png";
                celda.appendChild(crearImagen);
            }
            
            turnoTexto.textContent = "Es el turno de: X";
            turno = false;
        } else {
            if (celda.children.length > 0) {
                const imgActual = celda.querySelector<HTMLImageElement>("img");
                if(!imgActual) return;
                imgActual.src = "cruz.png";
            } else {
                crearImagen.src = "cruz.png";
                celda.appendChild(crearImagen);
            }
            
            turnoTexto.textContent = "Es el turno de: O";
            turno = true;
            }

            comprobarTablero()
    });
});

