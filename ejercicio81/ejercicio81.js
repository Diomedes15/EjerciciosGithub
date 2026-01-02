var opciones = document.querySelectorAll(".opcion");
var maquina = document.getElementById("maquina");
var resultado = document.getElementById("resultado");
var elementos = ["piedra", "papel", "tijera"];
opciones.forEach(function (opcion) {
    opcion.addEventListener("click", function () {
        var numeroAleatorio = Math.floor(Math.random() * 3);
        var eleccion = elementos[numeroAleatorio];
        maquina.src = "".concat(eleccion, ".png");
        if (opcion.id === "piedra") {
            switch (eleccion) {
                case "piedra":
                    resultado.textContent = "Has empatado";
                    break;
                case "papel":
                    resultado.textContent = "Has perdido";
                    break;
                case "tijera":
                    resultado.textContent = "Has ganado";
                    break;
            }
        }
        else if (opcion.id === "papel") {
            switch (eleccion) {
                case "piedra":
                    resultado.textContent = "Has ganado";
                    break;
                case "papel":
                    resultado.textContent = "Has empatado";
                    break;
                case "tijera":
                    resultado.textContent = "Has perdido";
                    break;
            }
        }
        else if (opcion.id === "tijera") {
            switch (eleccion) {
                case "piedra":
                    resultado.textContent = "Has perdido";
                    break;
                case "papel":
                    resultado.textContent = "Has ganado";
                    break;
                case "tijera":
                    resultado.textContent = "Has empatado";
                    break;
            }
        }
    });
});
