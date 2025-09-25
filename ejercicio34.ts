let textoLargo : string = "El sábado iré a comer fuera";
let longitudTexto : number = textoLargo.length;
let numeroAleatorio : number = Math.round(Math.random()*longitudTexto);

console.log(textoLargo.slice(numeroAleatorio, numeroAleatorio + 1));

// otra posibilidad sería: console.log(textoLargo.charAt(numeroAleatorio));