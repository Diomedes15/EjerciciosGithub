const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const pincel = canvas.getContext("2d") as CanvasRenderingContext2D;
const botones = document.querySelectorAll<HTMLDivElement>(".boton");

function ajustarCanvas(): void {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

ajustarCanvas();
window.addEventListener("resize", ajustarCanvas);

let herramientaSeleccionada: string = "";

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        herramientaSeleccionada = boton.id;
    });
});

let dibujando: boolean = false;
let ultimoX = 0;
let ultimoY = 0;

canvas.addEventListener("mousedown", (e: MouseEvent) => {
    dibujando = true;
    const rect = canvas.getBoundingClientRect();
    ultimoX = e.clientX - rect.left;
    ultimoY = e.clientY - rect.top;
});

canvas.addEventListener("mouseup", () => dibujando = false);
canvas.addEventListener("mouseleave", () => dibujando = false);

canvas.addEventListener("mousemove", (e: MouseEvent) => {
    if (!dibujando) return;

    const rect = canvas.getBoundingClientRect();
    const x: number = e.clientX - rect.left;
    const y: number = e.clientY - rect.top;

    switch (herramientaSeleccionada) {

        case "lapiz":
            pincel.strokeStyle = "black";
            pincel.lineWidth = 3;
        break;

        case "borrador":
            pincel.strokeStyle = "white";
            pincel.lineWidth = 15;
        break;

        case "pinturaRoja":
            pincel.strokeStyle = "red";
            pincel.lineWidth = 5;
        break;

        case "pinturaAmarilla":
            pincel.strokeStyle = "yellow";
            pincel.lineWidth = 5;
        break;

        case "pinturaVerde":
            pincel.strokeStyle = "green";
            pincel.lineWidth = 5;
        break;

        case "pinturaAzul":
            pincel.strokeStyle = "blue";
            pincel.lineWidth = 5;
        break;

        default:
            return;
    }

    pincel.beginPath();
    pincel.moveTo(ultimoX, ultimoY);
    pincel.lineTo(x, y);
    pincel.stroke();

    ultimoX = x;
    ultimoY = y;
});

