let alumno: string = "Pepe";
let edadAlumno: number= 15;

function MayoroMenor (nombre: string, edad: number): string {
    if (edad < 18){
        return `${nombre} tiene ${edad} y es menor de edad.`;
    } else if (edad >= 18){
        return `${nombre} tiene ${edad} y es mayor de edad.`;
    }
}

console.log(MayoroMenor(alumno, edadAlumno))

