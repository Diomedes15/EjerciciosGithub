const popup = document.getElementById("popup") as HTMLButtonElement;
const fondo = document.body as HTMLBodyElement;
const contenedor = document.getElementById("contenedor") as HTMLDivElement;
const cerrar = document.getElementById("cerrar") as HTMLButtonElement;

popup.addEventListener("click", () => {
    fondo.style.backgroundColor = "black";
    contenedor.style.display = "flex";
})

cerrar.addEventListener("click", () => {
    fondo.style.backgroundColor = "white";
    contenedor.style.display = "none";
})