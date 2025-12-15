const anadir = document.getElementById("añadir") as HTMLButtonElement;
let entrada = document.getElementById("entrada") as HTMLInputElement;
const contenedor = document.getElementById("contenedor") as HTMLDivElement;

anadir.addEventListener("click", () => {
    if (entrada.value){
        const parrafo = document.createElement("p");
        parrafo.textContent = entrada.value;
        parrafo.classList.add("escuchar");

        contenedor.appendChild(parrafo);
        entrada.value = "";
    }
})

const parrafos = document.querySelectorAll(".escuchar");

parrafos.forEach(p => {
    p.addEventListener("click", () => {
        p.remove();
    })
})