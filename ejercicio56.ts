interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

const persona: Persona = {
    nombre: "Antonio",
    edad: 40,
    direccion: {
        calle: "Plz San Bartolomé",
        ciudad: "Zamora",
        pais: "España"
    }
};