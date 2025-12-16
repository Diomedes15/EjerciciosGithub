var colores = document.getElementById("colores");
var body = document.body;
colores.addEventListener("change", function () {
    var color = colores.value;
    body.style.backgroundColor = color;
});
