const anadir = document.getElementById("añadir");
let entrada = document.getElementById("entrada");
const contenedor = document.getElementById("contenedor");
anadir.addEventListener("click", () => {
    if (entrada.value) {
        const parrafo = document.createElement("p");
        parrafo.textContent = entrada.value;
        parrafo.classList.add("escuchar");
        parrafo.addEventListener("click", () => {
            parrafo.remove();
        });
        contenedor.appendChild(parrafo);
        entrada.value = "";
    }
});
