const contenedor = document.getElementById("contenedor") as HTMLDivElement;
let contador: number = 5;

while ( contador > 0){
const numeroAleatorio1: number = Math.round(Math.random()*700);
const numeroAleatorio2: number = Math.round(Math.random()*1400);
const moneda = document.createElement("img");
moneda.src = "goldcoin.png"
moneda.style.position = "absolute";
moneda.style.top = `${numeroAleatorio1}px`;
moneda.style.left = `${numeroAleatorio2}px`;
contenedor.appendChild(moneda);

contador--
}