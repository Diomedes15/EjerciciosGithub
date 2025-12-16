const colores = document.getElementById("colores") as HTMLSelectElement;
const body = document.body;

colores.addEventListener("change", () => {
    const color = colores.value;
    body.style.backgroundColor = color;
});