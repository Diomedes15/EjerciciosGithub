var colores = document.querySelectorAll(".color");
var cajas = document.querySelectorAll(".caja");
colores.forEach(function (color) {
    color.addEventListener("click", function () {
        if (color.textContent === "todos") {
            cajas.forEach(function (caja) {
                caja.style.display = "block";
            });
            return;
        }
        cajas.forEach(function (caja) {
            if (!caja.classList.contains(color.textContent)) {
                caja.style.display = "none";
            }
            else {
                caja.style.display = "block";
            }
        });
    });
});
