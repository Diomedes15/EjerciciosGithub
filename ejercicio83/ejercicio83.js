fetch("https://thronesapi.com/api/v2/Characters")
    .then(function (response) { return response.json(); })
    .then(function (personajes) {
    var contenedor = document.getElementById("personajes");
    personajes.forEach(function (personaje) {
        var carta = document.createElement("div");
        carta.classList.add("carta");
        carta.innerHTML = "\n                    <h3>".concat(personaje.fullName, "</h3>\n                    <p><b>T\u00EDtulo:</b> ").concat(personaje.title, "</p>\n                    <p><b>Casa:</b> ").concat(personaje.family, "</p>\n                    <img src=\"").concat(personaje.imageUrl, "\" alt=\"").concat(personaje.fullName, "\">\n                ");
        contenedor.appendChild(carta);
    });
})
    .catch(function (error) {
    console.error("Error al cargar los personajes:", error);
});
