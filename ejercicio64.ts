const boton = document.getElementById("calcular") as HTMLButtonElement;

const tasas: any = {
  EUR: { EUR: 1.00, USD: 1.07, GBP: 0.85, NOK: 11.50, JPY: 157.00 },
  USD: { EUR: 0.93, USD: 1.00, GBP: 0.79, NOK: 10.75, JPY: 147.00 },
  GBP: { EUR: 1.17, USD: 1.26, GBP: 1.00, NOK: 13.60, JPY: 185.00 },
  NOK: { EUR: 0.087, USD: 0.093, GBP: 0.073, NOK: 1.00, JPY: 13.60 },
  JPY: { EUR: 0.0064, USD: 0.0068, GBP: 0.0054, NOK: 0.073, JPY: 1.00 }
};

boton.addEventListener("click", () => {
    const entrada = Number((document.getElementById("entrada") as HTMLInputElement).value);
    const monedaEntrada = (document.getElementById("monedaEntrada") as HTMLSelectElement).value;
    const monedaSalida = (document.getElementById("monedaSalida") as HTMLSelectElement).value;

    //Esto he buscado cómo se hacía
    const resultado = entrada * tasas[monedaEntrada][monedaSalida];

    //En TypeScript la propiedad value de un HTMLInputElement siempre es un string
    (document.getElementById("salida") as HTMLInputElement).value = resultado.toString();
  }
);