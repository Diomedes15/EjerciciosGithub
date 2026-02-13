const imagenes = document.querySelectorAll<HTMLImageElement>("img");
const huecos = document.querySelectorAll("td.images");

let imagenActual: HTMLImageElement | null = null;

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