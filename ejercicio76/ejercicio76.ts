const palabras = document.querySelectorAll<HTMLElement>(".rojo");

palabras.forEach(palabra => {
  palabra.style.color = "red";
});