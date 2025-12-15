var caja = document.getElementById("caja");
caja.addEventListener("mouseenter", function () {
    caja.textContent = "el ratón está aquí dentro";
});
caja.addEventListener("mouseleave", function () {
    caja.textContent = "el ratón se fue";
});
