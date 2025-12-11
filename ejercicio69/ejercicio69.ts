const boton = document.getElementById("calcular") as HTMLButtonElement;
let salida = document.getElementById("resultado") as HTMLParagraphElement;
const letras : string[] = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

boton.addEventListener("click", () => {
    let entrada = document.getElementById("entrada") as HTMLInputElement;

    if (entrada.value.length !== 8){
        entrada.value = "";
        salida.textContent = "";
    } else {
        let resto: number = Number(entrada.value) % 23;
        salida.textContent = `La letra de tu DNI es: ${letras[resto]}`;
    }
});