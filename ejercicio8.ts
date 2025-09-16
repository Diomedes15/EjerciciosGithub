let tabla: number = 1;

while (tabla <= 10) {
  console.log("Tabla del", tabla);

  let numeros:number = 0;
  while (numeros <= 10) {
    console.log(tabla, "x", numeros, "=", tabla*numeros);
    numeros++;
  }

  tabla++;
}