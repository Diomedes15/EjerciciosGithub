const caja = document.getElementById("caja") as HTMLDivElement;

caja.addEventListener("mouseenter", () => {
    caja.textContent = "el ratón está aquí dentro";
});

caja.addEventListener("mouseleave", () => {
    caja.textContent = "el ratón se fue";
});