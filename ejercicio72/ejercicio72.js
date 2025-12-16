var contenedor = document.getElementById("contenedor");
var contador = 5;
while (contador > 0) {
    var numeroAleatorio1 = Math.round(Math.random() * 700);
    var numeroAleatorio2 = Math.round(Math.random() * 1400);
    var moneda = document.createElement("img");
    moneda.src = "goldcoin.png";
    moneda.style.position = "absolute";
    moneda.style.top = "".concat(numeroAleatorio1, "px");
    moneda.style.left = "".concat(numeroAleatorio2, "px");
    contenedor.appendChild(moneda);
    contador--;
}
