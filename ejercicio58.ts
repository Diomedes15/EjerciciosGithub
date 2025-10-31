interface Persona {
    nombre: string;
    edad: number;
}

interface Empleado extends Persona {
    puesto: string;
    salario: number;
}

const empleado1: Empleado = {
    nombre: "Mina Botieso",
    edad: 20,
    puesto: "Profesora",
    salario: 14.000
}