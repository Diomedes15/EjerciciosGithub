var imagen = document.getElementById("imagen");
var cambiada = false;
imagen.addEventListener("click", function () {
    if (cambiada) {
        imagen.src = "limoncios_peleados.jpg";
        cambiada = false;
    }
    else {
        imagen.src = "limoncio_comiendo.png";
        cambiada = true;
    }
});
