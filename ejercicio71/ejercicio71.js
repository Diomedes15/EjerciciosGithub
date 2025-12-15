var anadir = document.getElementById("añadir");
var entrada = document.getElementById("entrada");
var contenedor = document.getElementById("contenedor");
anadir.addEventListener("click", function () {
    if (entrada.value) {
        var parrafo = document.createElement("p");
        parrafo.textContent = entrada.value;
        parrafo.classList.add("escuchar");
        contenedor.appendChild(parrafo);
        entrada.value = "";
    }
});
var parrafos = document.querySelectorAll(".escuchar");
parrafos.forEach(function (p) {
    p.addEventListener("click", function () {
        p.remove();
    });
});
