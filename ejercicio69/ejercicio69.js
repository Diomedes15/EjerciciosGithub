var boton = document.getElementById("calcular");
var salida = document.getElementById("resultado");
var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
boton.addEventListener("click", function () {
    var entrada = document.getElementById("entrada");
    if (entrada.value.length !== 8) {
        entrada.value = "";
        salida.textContent = "";
    }
    else {
        var resto = Number(entrada.value) % 23;
        salida.textContent = "La letra de tu DNI es: ".concat(letras[resto]);
    }
});
