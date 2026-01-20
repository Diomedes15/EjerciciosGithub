const tablero = document.getElementById("tablero") as HTMLDivElement;
const resultado = document.getElementById("resultado") as HTMLHeadingElement;
const figuras: string[] = ["circulo", "cruz", "triangulo", "cuadrado", "rombo", "estrella", "corazon", "medialuna"];
const figurasDuplicadas: string[] = [];
let numerosAplicados: number[] = [];

figuras.forEach(figura => {
    figurasDuplicadas.push(figura, figura);
});

let numTarjetas: number = figurasDuplicadas.length;

while (numTarjetas > 0){
    const numeroAleatorio: number = Math.floor(Math.random() * figurasDuplicadas.length);
    
    if (!numerosAplicados.includes(numeroAleatorio)){
        numerosAplicados.push(numeroAleatorio);

        const tarjeta = document.createElement("button");
        tarjeta.classList.add("tarjeta")
        tarjeta.dataset.figura = figurasDuplicadas[numeroAleatorio];
        tablero.appendChild(tarjeta);

        const trasera = document.createElement("div");
        trasera.classList.add("cara", "trasera");
        tarjeta.appendChild(trasera);

        const delantera = document.createElement("div");
        delantera.classList.add("cara","delantera");
        tarjeta.appendChild(delantera);

        const imagen = document.createElement("img");
        imagen.src = `img/${figurasDuplicadas[numeroAleatorio]}.png`;
        delantera.appendChild(imagen);

        numTarjetas--
    } 
};

const tarjetas = document.querySelectorAll<HTMLButtonElement>(".tarjeta");
let tarjetasGiradas: HTMLButtonElement[] = [];
let bloqueo: boolean = false;

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {

        if (bloqueo) return;
        if (tarjeta.classList.contains("girada")) return;

        tarjeta.classList.add("girada");
        tarjetasGiradas.push(tarjeta);

        if (tarjetasGiradas.length === 2) {
            const t1 = tarjetasGiradas[0];
            const t2 = tarjetasGiradas[1];

            if (t1.dataset.figura === t2.dataset.figura) {
                tarjetasGiradas = [];
            } else {
                bloqueo = true;

                setTimeout(() => {
                    t1.classList.remove("girada");
                    t2.classList.remove("girada");
                    tarjetasGiradas = [];
                    bloqueo = false;
                }, 1000);
            }
        }
        const todasGiradas = Array.from(tarjetas).every(t => t.classList.contains("girada"));
        if (todasGiradas) resultado.textContent = "¡Felicidades! Has ganado";
    });
});