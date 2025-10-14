const destino = String(prompt("¿Dónde va a viajar?(Oviedo, Tokyo, Madrid, Barcelona):"));
const numNoches = Number(prompt("¿Cúantas noches va alojarse allí?:"));

function costeHotel (numNoches: number): number {
    if (numNoches < 3){
        return numNoches * 140
    } else if (numNoches < 7){
        return (numNoches * 140)*0.90
    } else {
        return (numNoches * 140)*0.85
    }
}

 let costeAvion: number = 0;

  switch (destino) {
    case "Oviedo": costeAvion = 15; break;
    case "Tokyo": costeAvion = 700; break;
    case "Madrid": costeAvion = 90; break;
    case "Barcelona": costeAvion = 50; break;
  }

function costeAlquilerCoche (numNoches: number): number {
    if (numNoches < 3){
        return numNoches * 40
    } else if (numNoches < 7){
        return (numNoches * 40) - 20
    } else {
        return (numNoches * 40) - 50
    }
}

console.log(`El costo total sería:`, costeHotel(numNoches) + costeAvion + costeAlquilerCoche(numNoches));
