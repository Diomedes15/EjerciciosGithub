var boton = document.getElementById("boton");
boton.addEventListener("click", function () {
    var _a;
    var nombre = document.getElementById("nombre").value;
    var material = document.getElementById("material").value;
    var tamano = (_a = document.querySelector('input[name="tamano"]:checked')) === null || _a === void 0 ? void 0 : _a.value;
    var comentarios = document.getElementById("comentarios").value;
    var informacion = "Querido/a ".concat(nombre, ", su paquete ").concat(tamano, " de ").concat(material, " ser\u00E1 enviado r\u00E1pidamente hacia el domicilio indicado.");
    if (comentarios !== "") {
        informacion += "Comentarios adicionales: ".concat(comentarios);
    }
    document.getElementById("informacion").value = informacion;
});
