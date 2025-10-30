const nombres : string[] = ["Luís", "Jorge", "Jose", "Marcos", "Guillermo"];
const nombresNuevos : string[] = nombres.map(nombre => `Conozco a alguien llamado ${nombre}.`);

console.log(nombresNuevos);