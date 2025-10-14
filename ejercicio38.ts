alert("Eres un héroe que ha entrado a una mazmorra con 2 puertas, una lleva a la muerte y la otra no. Elige con cuidado.");

let contador: number = 0;
let contadorPuertas: number = 0;

while(contador == 0){
    const numeroAleatorio = Math.floor(Math.random() * 2) + 1;
    const eleccion = Number(prompt("¿Qué puerta eliges?¿La 1 o la 2?"));

    if (numeroAleatorio == eleccion){
        alert("¡Has elegido la puerta correcta! Puedes continuar");
        contadorPuertas++
    } else {
        contador++
        alert(`Has elegido el camino de la muerte, has pasado ${contadorPuertas} puertas`);
    }

}
