let tablero: string[] = ['1', '2', '3', '4', '5', '6','7', '8', '9'];
let jugador: string = "X";
let juegoTerminado: boolean = false;

alert (`
    ${tablero[0]} | ${tablero[1]} | ${tablero[2]}
    ${tablero[3]} | ${tablero[4]} | ${tablero[5]}
    ${tablero[6]} | ${tablero[7]} | ${tablero[8]}

    Turno del jugador: ${jugador}`
);

function comprobarGanador (tablero: string[], jugador: string): boolean{
    const combinaciones: number[][] = [
        [0, 1, 2], // fila 1
        [3, 4, 5], // fila 2
        [6, 7, 8], // fila 3
        [0, 3, 6], // columna 1
        [1, 4, 7], // columna 2
        [2, 5, 8], // columna 3
        [0, 4, 8], // diagonal 1
        [2, 4, 6]  // diagonal 2
    ];

    for (let combinacion of combinaciones) {

        let a: number = combinacion[0];
        let b: number = combinacion[1];
        let c: number = combinacion[2];

        if (tablero[a] === jugador && tablero[b] === jugador && tablero[c] === jugador) {
            return true;
        }
    }

    return false;
}

while (!juegoTerminado){

const numeroElegido: number = parseInt(prompt("Elige donde quieres poner tu ficha") || "");
const numeros: string = "123456789";

function cambiarArray (numero: number){

    if(numeros.includes(tablero[numero - 1])){

        tablero.splice(numero - 1,1,jugador)

        if (comprobarGanador(tablero,jugador)){
            juegoTerminado = true;
        } else {

            if(jugador === "X") jugador="O"
            else if (jugador === "O") jugador="X"

            alert (`
                ${tablero[0]} | ${tablero[1]} | ${tablero[2]}
                ${tablero[3]} | ${tablero[4]} | ${tablero[5]}
                ${tablero[6]} | ${tablero[7]} | ${tablero[8]}

                Turno del jugador: ${jugador}`
            );
        }
        
    } else {
        alert(`Número incorrecto, elige otro`)
    }
}
    cambiarArray(numeroElegido)
}

if (juegoTerminado) alert(`El ganador de esta partida ha sido: ${jugador}`)