var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
var boton = document.getElementById("boton");
var contador = 3;
boton.addEventListener("click", function () {
    var numeroElegido = document.getElementById("entrada").value;
    if (numeroElegido === "".concat(numeroAleatorio)) {
        document.getElementById("salida").value = "\u00A1Enhorabuena! Has acertado.";
    }
    else if (contador > 0) {
        contador--;
        document.getElementById("salida").value = "Te quedan ".concat(contador, " vidas.");
    }
    else {
        alert("No te quedan vidas.");
    }
});
