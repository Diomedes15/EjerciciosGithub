var eleccionJugador1 = document.querySelectorAll(".opcion1");
var eleccionJugador2 = document.querySelectorAll(".opcion2");
var interrogacion1 = document.getElementById("interrogacion1");
var interrogacion2 = document.getElementById("interrogacion2");
var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");
var resultado = document.getElementById("resultado");
var todo = document.getElementById("todo");
var elecciones = document.getElementById("elecciones");
var hecho1 = false;
var hecho2 = false;
var eleccion1 = "";
var eleccion2 = "";
eleccionJugador1.forEach(function (eleccion) {
    eleccion.addEventListener("click", function () {
        hecho1 = true;
        eleccion1 = eleccion.id;
        if (hecho2 == false) {
            interrogacion1.src = "check.png";
            texto1.classList.add("oculto");
        }
        else {
            interrogacion1.classList.add("oculto");
        }
        comprobarResultado();
    });
});
eleccionJugador2.forEach(function (eleccion) {
    eleccion.addEventListener("click", function () {
        hecho2 = true;
        eleccion2 = eleccion.id;
        if (hecho1 == false) {
            interrogacion2.src = "check.png";
            texto2.classList.add("oculto");
        }
        else {
            interrogacion1.classList.add("oculto");
        }
        comprobarResultado();
    });
});
function comprobarResultado() {
    if (!hecho1 || !hecho2)
        return;
    todo.classList.add("oculto");
    if (eleccion1 === eleccion2) {
        resultado.textContent = "Habeis empatado";
        elecciones.textContent = "Elecci\u00F3n del jugador 1: ".concat(eleccion1, ". Elecci\u00F3n del jugador 2: ").concat(eleccion2, ".");
    }
    else if (eleccion1 === "piedra" && eleccion2 === "papel") {
        resultado.textContent = "Ha ganado el jugador 2";
        elecciones.textContent = "Elecci\u00F3n del jugador 1: ".concat(eleccion1, ". Elecci\u00F3n del jugador 2: ").concat(eleccion2, ".");
    }
    else if (eleccion1 === "piedra" && eleccion2 === "tijera") {
        resultado.textContent = "Ha ganado el jugador 1";
        elecciones.textContent = "Elecci\u00F3n del jugador 1: ".concat(eleccion1, ". Elecci\u00F3n del jugador 2: ").concat(eleccion2, ".");
    }
    else if (eleccion1 === "papel" && eleccion2 === "piedra") {
        resultado.textContent = "Ha ganado el jugador 1";
        elecciones.textContent = "Elecci\u00F3n del jugador 1: ".concat(eleccion1, ". Elecci\u00F3n del jugador 2: ").concat(eleccion2, ".");
    }
    else if (eleccion1 === "papel" && eleccion2 === "tijera") {
        resultado.textContent = "Ha ganado el jugador 2";
        elecciones.textContent = "Elecci\u00F3n del jugador 1: ".concat(eleccion1, ". Elecci\u00F3n del jugador 2: ").concat(eleccion2, ".");
    }
    else if (eleccion1 === "tijera" && eleccion2 === "piedra") {
        resultado.textContent = "Ha ganado el jugador 2";
        elecciones.textContent = "Elecci\u00F3n del jugador 1: ".concat(eleccion1, ". Elecci\u00F3n del jugador 2: ").concat(eleccion2, ".");
    }
    else if (eleccion1 === "tijera" && eleccion2 === "papel") {
        resultado.textContent = "Ha ganado el jugador 1";
        elecciones.textContent = "Elecci\u00F3n del jugador 1: ".concat(eleccion1, ". Elecci\u00F3n del jugador 2: ").concat(eleccion2, ".");
    }
}
;
