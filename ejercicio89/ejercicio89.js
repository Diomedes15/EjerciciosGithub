const inputTexto = document.getElementById("intro");
const pantalla = document.getElementById("texto");
inputTexto.focus();
let tiempoInicio = null;
let tiempoFin = null;
const palabras = [
    "cielo", "mar", "montana", "fuego", "agua", "viento", "tierra",
    "luz", "sombra", "noche", "dia", "estrella", "luna", "sol",
    "camino", "puerta", "llave", "bosque", "ciudad", "reino",
    "honor", "sangre", "espada", "corona", "dios", "heroe",
    "destino", "memoria", "tiempo", "silencio", "voz", "eco",
    "piedra", "arena", "hierro", "oro", "plata", "humo",
    "trueno", "lluvia", "nieve", "hielo", "flor", "raiz",
    "hoja", "rio", "mariposa", "ave", "lobo", "dragon",
    "fuerza", "calma", "miedo", "valor", "esperanza", "caos",
    "orden", "guerra", "paz", "viaje", "sendero", "puente",
    "torre", "castillo", "aldea", "campo", "isla", "barco",
    "puerto", "mapa", "rumbo", "norte", "sur", "este", "oeste",
    "historia", "leyenda", "mito", "secreto", "promesa", "juramento",
    "traicion", "perdon", "culpa", "justicia", "poder", "control",
    "energia", "alma", "mente", "cuerpo"
];
const palabrasElegidas = [];
while (palabrasElegidas.length < 50) {
    const numeroAleatorio = Math.floor(Math.random() * palabras.length);
    if (!palabrasElegidas.includes(palabras[numeroAleatorio]))
        palabrasElegidas.push(palabras[numeroAleatorio]);
}
function resultados() {
    const texto1 = document.createElement("h3");
    const correctas = document.querySelectorAll(".correcta").length;
    const porcentaje = Math.round((correctas / contador) * 100);
    const tiempo = tiempoFin - tiempoInicio;
    const segundos = (tiempo / 1000).toFixed(2);
    texto1.textContent = `Has obtenido el ${porcentaje}% de acierto y has terminado la prueba en ${segundos} segundos`;
    pantalla.appendChild(texto1);
}
const textoCompleto = palabrasElegidas.join(" ");
pantalla.innerHTML = textoCompleto.split("").map(letra => `<span>${letra}</span>`).join("");
const letras = pantalla.querySelectorAll("span");
let contador = 0;
letras[contador].classList.add("cursor");
inputTexto.addEventListener("input", () => {
    const valor = inputTexto.value;
    if (!valor)
        return;
    if (tiempoInicio === null) {
        tiempoInicio = Date.now();
    }
    const letraEscrita = valor[0];
    const letraTexto = letras[contador];
    if (letraEscrita === letraTexto.textContent) {
        letraTexto.classList.add("correcta");
    }
    else {
        letraTexto.classList.add("incorrecta");
    }
    letraTexto.classList.remove("cursor");
    contador++;
    inputTexto.value = "";
    if (contador < letras.length) {
        letras[contador].classList.add("cursor");
    }
    if (contador === letras.length) {
        tiempoFin = Date.now();
        resultados();
    }
});
