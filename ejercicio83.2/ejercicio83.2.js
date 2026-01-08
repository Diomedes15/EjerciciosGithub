async function cargarPersonajes() {
    try {
        const response = await fetch("https://thronesapi.com/api/v2/Characters");
        const personajes = await response.json();
        const contenedor = document.getElementById("personajes");
        personajes.forEach(personaje => {
            const carta = document.createElement("div");
            carta.classList.add("carta");
            carta.innerHTML = `
                <h3>${personaje.fullName}</h3>
                <p><b>Título:</b> ${personaje.title}</p>
                <p><b>Casa:</b> ${personaje.family}</p>
                <img src="${personaje.imageUrl}" alt="${personaje.fullName}">
                `;
            contenedor.appendChild(carta);
        });
    }
    catch (error) {
        console.error("Error al cargar los personajes:", error);
    }
}
cargarPersonajes();
