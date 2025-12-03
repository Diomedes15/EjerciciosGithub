const boton1 = document.getElementById("convertir") as HTMLButtonElement;
const boton2 = document.getElementById("invertir") as HTMLButtonElement;
const unidad = document.getElementById("p1") as HTMLParagraphElement;

boton1.addEventListener("click", () => {
        let cantidad = Number((document.getElementById("entrada") as HTMLInputElement).value);
        
        if (unidad.textContent === "°C"){
            cantidad = cantidad * (5/9) + 23;
            (document.getElementById("salida") as HTMLInputElement).value = cantidad.toFixed(2);
        } else {
            cantidad = cantidad - 23 / (5/9);
            (document.getElementById("salida") as HTMLInputElement).value = cantidad.toFixed(2);
        }
    }
);

boton2.addEventListener("click", () => {
        if (unidad.textContent === "°C") {
            (document.getElementById("p1") as HTMLParagraphElement).textContent = "°F";
            (document.getElementById("p2") as HTMLParagraphElement).textContent = "°C";
        } else {
            (document.getElementById("p1") as HTMLParagraphElement).textContent = "°C";
            (document.getElementById("p2") as HTMLParagraphElement).textContent = "°F";
        }
    }
);