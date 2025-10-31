interface Personaje {
    nombre: string;
    stand: string;
    grito: string;
    gritar(repeticiones: number): void;
}

const personaje1 : Personaje = {
    nombre: "Jotaro",
    stand:"Estrella plateada",
    grito:"ora",
    gritar(repeticiones: number) {
        while(repeticiones > 0){
            console.log(this.grito)
            repeticiones--
        }
    }
}

personaje1.gritar(5);