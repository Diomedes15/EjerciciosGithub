var popup = document.getElementById("popup");
var fondo = document.body;
var contenedor = document.getElementById("contenedor");
var cerrar = document.getElementById("cerrar");
popup.addEventListener("click", function () {
    fondo.style.backgroundColor = "black";
    contenedor.style.display = "flex";
});
cerrar.addEventListener("click", function () {
    fondo.style.backgroundColor = "white";
    contenedor.style.display = "none";
});
