const anadir = document.getElementById("añadir") as HTMLButtonElement;
let entrada = document.getElementById("entrada") as HTMLInputElement;
const contenedor = document.getElementById("contenedor") as HTMLDivElement;

anadir.addEventListener("click", () => {
    if (entrada.value){
        const parrafo = document.createElement("p");
        parrafo.textContent = entrada.value;
        parrafo.classList.add("escuchar");

        parrafo.addEventListener("click", () => {
            parrafo.remove();
        });

        contenedor.appendChild(parrafo);
        entrada.value = "";
    }
})