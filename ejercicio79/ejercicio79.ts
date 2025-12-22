const colores = document.querySelectorAll<HTMLParagraphElement>(".color");
const cajas = document.querySelectorAll<HTMLDivElement>(".caja");

colores.forEach(color => {
    color.addEventListener("click", () => {

        if (color.textContent === "todos") {
            cajas.forEach(caja => {
                caja.style.display = "block";
            });
            return
        }

        cajas.forEach(caja => {
            if (!caja.classList.contains(color.textContent)) {
                caja.style.display = "none";
            } else {
                caja.style.display = "block";
            }
        });

    });
});