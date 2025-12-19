const boton = document.getElementById("guardar") as HTMLButtonElement;

boton.addEventListener("click", () => {
    const inputs = document.querySelectorAll<HTMLInputElement>(".clase");
    const parrafo = document.getElementById("resultado") as HTMLParagraphElement;

    let resultado = "";

    inputs.forEach(input => {
        resultado += input.value;
    });

    parrafo.textContent = resultado;
})