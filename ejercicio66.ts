const boton = document.getElementById("boton") as HTMLButtonElement;

boton.addEventListener("click", () => {
        const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
        const material = (document.getElementById("material") as HTMLSelectElement).value;
        const tamano = (document.querySelector('input[name="tamano"]:checked') as HTMLInputElement)?.value;
        const comentarios = (document.getElementById("comentarios") as HTMLTextAreaElement).value;
        let informacion: string = `Querido/a ${nombre}, su paquete ${tamano} de ${material} será enviado rápidamente hacia el domicilio indicado.`

        if (comentarios !== ""){
            informacion += `Comentarios adicionales: ${comentarios}`
        }

        (document.getElementById("informacion") as HTMLTextAreaElement).value = informacion;
    }
);
