let textoLargo : string = "El sábado iré a comer fuera";
let longitudTexto : number = textoLargo.length;
let numeroAleatorio : number = Math.round(Math.random()*longitudTexto);

console.log(textoLargo.slice(numeroAleatorio, numeroAleatorio + 1));

// No sé si sería mejor poner (numeroAleatorio - 1, numeroAleatorio) o (numeroAleatorio, numeroAleatorio + 1)