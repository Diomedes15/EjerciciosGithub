let velocidad: number = 70;

function calcularVelocidad (valor: number): void {
    const velocidadCalculada: number = valor * 1000
    console.log(velocidad, "km/h son", velocidadCalculada, "m/h")
}

calcularVelocidad(velocidad)