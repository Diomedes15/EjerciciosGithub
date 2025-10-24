let nombre: string | null = prompt("¿Cómo te llamas?");

while (!nombre || /\d/.test(nombre)) {
  nombre = prompt("Nombre incorrecto. Escribe tu nombre de nuevo:");
}

let correcto: boolean = confirm(`¿Es "${nombre}" tu nombre?`);

if (correcto) {
  alert(`Seguimos con el proceso de registro`);
} else {
  alert(`Has cancelado el proceso`);
}
