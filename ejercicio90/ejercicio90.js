const imagenes = document.querySelectorAll("img");
const huecos = document.querySelectorAll("td.images");
let imagenActual = null;
imagenes.forEach(img => {
    img.addEventListener('dragstart', () => {
        imagenActual = img;
    });
});
huecos.forEach(hueco => {
    hueco.addEventListener('dragover', function (e) {
        e.preventDefault();
    });
    hueco.addEventListener('drop', function (e) {
        e.preventDefault();
        if (imagenActual) {
            hueco.appendChild(imagenActual);
        }
    });
});
