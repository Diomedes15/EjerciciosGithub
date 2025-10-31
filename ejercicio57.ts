interface Personaje {
    nombre: string;
    stand: string;
    habilidades: string[];
}

const personaje1: Personaje = {
    nombre: "Jonathan Joestar",
    stand: "Tusk",
    habilidades: ["Uñas con Giro", "Uñas con Proporción Áurea", "Punto Final del Infinito", "Super Giro"];
};

function informacion (valor: Personaje){
    console.log(`${valor.nombre} tiene el stand ${valor.stand} que tiene las siguientes habilidades: ${valor.habilidades} `)
}
