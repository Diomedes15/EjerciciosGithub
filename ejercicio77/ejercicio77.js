var boton = document.getElementById("guardar");
boton.addEventListener("click", function () {
    var inputs = document.querySelectorAll(".clase");
    var parrafo = document.getElementById("resultado");
    var resultado = "";
    inputs.forEach(function (input) {
        resultado += input.value;
    });
    parrafo.textContent = resultado;
});
