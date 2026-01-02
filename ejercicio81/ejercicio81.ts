const opciones = document.querySelectorAll<HTMLImageElement>(".opcion");
const maquina = document.getElementById("maquina") as HTMLImageElement;
const resultado = document.getElementById("resultado") as HTMLParagraphElement;

const elementos: string[] = ["piedra", "papel", "tijera"];

opciones.forEach( opcion => {
    opcion.addEventListener("click", () => {
        const numeroAleatorio: number = Math.floor(Math.random() * 3);
        const eleccion = elementos[numeroAleatorio];
        maquina.src = `${eleccion}.png`;

        if (opcion.id === "piedra") {
            switch (eleccion) {
                case "piedra": resultado.textContent = "Has empatado"; break;
                case "papel": resultado.textContent = "Has perdido"; break;
                case "tijera": resultado.textContent = "Has ganado"; break;
            }

        } else if (opcion.id === "papel") {
            switch (eleccion) {
                case "piedra": resultado.textContent = "Has ganado"; break;
                case "papel": resultado.textContent = "Has empatado"; break;
                case "tijera": resultado.textContent = "Has perdido"; break;
            }

        } else if (opcion.id === "tijera") {
            switch (eleccion) {
                case "piedra": resultado.textContent = "Has perdido"; break;
                case "papel": resultado.textContent = "Has ganado"; break;
                case "tijera": resultado.textContent = "Has empatado"; break;
            }
        }

    });
});