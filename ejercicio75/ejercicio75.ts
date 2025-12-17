const imagen = document.getElementById("imagen") as HTMLImageElement;
let cambiada: boolean = false;

imagen.addEventListener("click", () => {
    if (cambiada){
        imagen.src = "limoncios_peleados.jpg"
        cambiada = false;
    } else {
        imagen.src = "limoncio_comiendo.png"
        cambiada = true;
    }
})