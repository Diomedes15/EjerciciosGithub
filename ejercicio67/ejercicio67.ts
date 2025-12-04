const numeroAleatorio: number = Math.floor(Math.random() * 10) + 1;
const boton = document.getElementById("boton") as HTMLButtonElement;
let contador: number = 3;

boton.addEventListener("click", () => {
        const numeroElegido = (document.getElementById("entrada") as HTMLInputElement).value;

        if (numeroElegido === `${numeroAleatorio}`){
            (document.getElementById("salida") as HTMLInputElement).value = `¡Enhorabuena! Has acertado.`
        } else if (contador > 0) {
            contador--
            (document.getElementById("salida") as HTMLInputElement).value = `Te quedan ${contador} vidas.`
        } else {
            alert("No te quedan vidas.");
        }
    }
);