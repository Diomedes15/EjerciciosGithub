var boton1 = document.getElementById("convertir");
var boton2 = document.getElementById("invertir");
var unidad = document.getElementById("p1");
boton1.addEventListener("click", function () {
    var cantidad = Number(document.getElementById("entrada").value);
    if (unidad.textContent === "°C") {
        cantidad = cantidad * (5 / 9) + 23;
        document.getElementById("salida").value = cantidad.toFixed(2);
    }
    else {
        cantidad = cantidad - 23 / (5 / 9);
        document.getElementById("salida").value = cantidad.toFixed(2);
    }
});
boton2.addEventListener("click", function () {
    if (unidad.textContent === "°C") {
        document.getElementById("p1").textContent = "°F";
        document.getElementById("p2").textContent = "°C";
    }
    else {
        document.getElementById("p1").textContent = "°C";
        document.getElementById("p2").textContent = "°F";
    }
});
