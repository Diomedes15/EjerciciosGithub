const eleccionJugador1 = document.querySelectorAll<HTMLImageElement>(".opcion1");
const eleccionJugador2 = document.querySelectorAll<HTMLImageElement>(".opcion2");
const interrogacion1 = document.getElementById("interrogacion1") as HTMLImageElement;
const interrogacion2 = document.getElementById("interrogacion2") as HTMLImageElement;
const texto1 = document.getElementById("texto1") as HTMLParagraphElement;
const texto2 = document.getElementById("texto2") as HTMLParagraphElement;
const resultado = document.getElementById("resultado") as HTMLHeadingElement;
const todo = document.getElementById("todo") as HTMLDivElement;
const elecciones = document.getElementById("elecciones") as HTMLParagraphElement;

let hecho1: boolean = false;
let hecho2: boolean = false;

let eleccion1: string = "";
let eleccion2: string = "";

eleccionJugador1.forEach( eleccion => {
    eleccion.addEventListener("click", () => {
        hecho1 = true;
        eleccion1 = eleccion.id;

        if(hecho2 == false){
            interrogacion1.src = "check.png"
            texto1.classList.add("oculto");
        } else {
            interrogacion1.classList.add("oculto");
        }

        comprobarResultado();
    });
});

eleccionJugador2.forEach( eleccion => {
    eleccion.addEventListener("click", () => {
        hecho2 = true;
        eleccion2 = eleccion.id;

        if(hecho1 == false){
            interrogacion2.src = "check.png"
            texto2.classList.add("oculto");
        } else {
            interrogacion1.classList.add("oculto");
        }

        comprobarResultado();
    });
});

function comprobarResultado() {
    if (!hecho1 || !hecho2) return;

    todo.classList.add("oculto");

        if (eleccion1 === eleccion2) {
            resultado.textContent = "Habeis empatado"
            elecciones.textContent = `Elección del jugador 1: ${eleccion1}. Elección del jugador 2: ${eleccion2}.`
        } else if (eleccion1 === "piedra" && eleccion2 === "papel") {
            resultado.textContent = "Ha ganado el jugador 2"
            elecciones.textContent = `Elección del jugador 1: ${eleccion1}. Elección del jugador 2: ${eleccion2}.`
        } else if (eleccion1 === "piedra" && eleccion2 === "tijera") {
            resultado.textContent = "Ha ganado el jugador 1"
            elecciones.textContent = `Elección del jugador 1: ${eleccion1}. Elección del jugador 2: ${eleccion2}.`
        } else if (eleccion1 === "papel" && eleccion2 === "piedra") {
            resultado.textContent = "Ha ganado el jugador 1"
            elecciones.textContent = `Elección del jugador 1: ${eleccion1}. Elección del jugador 2: ${eleccion2}.`
        } else if (eleccion1 === "papel" && eleccion2 === "tijera") {
            resultado.textContent = "Ha ganado el jugador 2"
            elecciones.textContent = `Elección del jugador 1: ${eleccion1}. Elección del jugador 2: ${eleccion2}.`
        } else if (eleccion1 === "tijera" && eleccion2 === "piedra") {
            resultado.textContent = "Ha ganado el jugador 2"
            elecciones.textContent = `Elección del jugador 1: ${eleccion1}. Elección del jugador 2: ${eleccion2}.`
        } else if (eleccion1 === "tijera" && eleccion2 === "papel") {
            resultado.textContent = "Ha ganado el jugador 1"
            elecciones.textContent = `Elección del jugador 1: ${eleccion1}. Elección del jugador 2: ${eleccion2}.`
        }
};