// 1. TABLERO

const tablero = document.getElementById("tablero") as HTMLDivElement;
const celdas: HTMLDivElement[] = [];

for (let i = 0; i < 200; i++) {
  const nuevoHueco = document.createElement("div");
  nuevoHueco.classList.add("hueco");
  tablero.appendChild(nuevoHueco);
  celdas.push(nuevoHueco);
}

// 2. PIEZAS

const L: number[][][] = [
  [[1, 0, 0],[1, 0, 0],[1, 1, 0]],
  [[0, 0, 0],[0, 0, 1],[1, 1, 1]],
  [[0, 1, 1],[0, 0, 1],[0, 0, 1]],
  [[1, 1, 1],[1, 0, 0],[0, 0, 0]]
];

const Z: number[][][] = [
  [[1, 1, 0],[0, 1, 1],[0, 0, 0]],
  [[1, 0, 0],[1, 1, 0],[0, 1, 0]]
];

const T: number[][][] = [
  [[1, 1, 1],[0, 1, 0],[0, 1, 0]],
  [[1, 0, 0],[1, 1, 1],[1, 0, 0]],
  [[0, 1, 0],[0, 1, 0],[1, 1, 1]],
  [[0, 0, 1],[1, 1, 1],[0, 0, 1]]
];

const Cuadrado: number[][][] = [
  [[1, 1],[1, 1]]
];

const Palo: number[][][] = [
  [[1, 1, 1, 1]],
  [[1],[1],[1],[1]]
];

const figuras: string[] = ["L","Z","T","Cuadrado","Palo"];

const mapaFiguras: Record<string, number[][][]> = {
  L, Z, T, Cuadrado, Palo
};

// 3. VARIABLES

let piezaActual: number[][][] = [];
let rotacion = 0;
let posicionHorizontal = 3;
let posicionVertical = 0;
let intervalo: any;
let puntos = 0;
let juegoTerminado = false;

// 4. FUNCIONES

function dibujarPieza() {
  if (juegoTerminado) return;

  celdas.forEach(celda => celda.classList.remove("activo"));

  const forma = piezaActual[rotacion];

  for (let fila = 0; fila < forma.length; fila++) {
    for (let columna = 0; columna < forma[fila].length; columna++) {
      if (forma[fila][columna] === 1) {
        const x = posicionHorizontal + columna;
        const y = posicionVertical + fila;
        const index = y * 10 + x;
        if (index >= 0 && index < 200) {
          celdas[index].classList.add("activo");
        }
      }
    }
  }
}

function puedeBajar(): boolean {
  const forma = piezaActual[rotacion];

  for (let fila = 0; fila < forma.length; fila++) {
    for (let columna = 0; columna < forma[fila].length; columna++) {
      if (forma[fila][columna] === 1) {
        const x = posicionHorizontal + columna;
        const y = posicionVertical + fila;
        const nuevoY = y + 1;

        if (nuevoY >= 20) return false;

        const indexDebajo = nuevoY * 10 + x;
        if (celdas[indexDebajo].classList.contains("ocupado")) {
          return false;
        }
      }
    }
  }
  return true;
}

function fijarPieza() {
  const forma = piezaActual[rotacion];

  for (let fila = 0; fila < forma.length; fila++) {
    for (let columna = 0; columna < forma[fila].length; columna++) {
      if (forma[fila][columna] === 1) {
        const x = posicionHorizontal + columna;
        const y = posicionVertical + fila;
        const index = y * 10 + x;
        celdas[index].classList.add("ocupado");
      }
    }
  }
}

function borrarFila(fila: number) {
  for (let columna = 0; columna < 10; columna++) {
    const index = fila * 10 + columna;
    celdas[index].classList.remove("ocupado");
  }

  for (let i = fila; i > 0; i--) {
    for (let columna = 0; columna < 10; columna++) {
      const index = i * 10 + columna;
      const indexArriba = (i - 1) * 10 + columna;

      if (celdas[indexArriba].classList.contains("ocupado")) {
        celdas[index].classList.add("ocupado");
      } else {
        celdas[index].classList.remove("ocupado");
      }
    }
  }
}

function comprobarLineas() {
  let lineas = 0;

  for (let fila = 0; fila < 20; fila++) {
    let completa = true;

    for (let columna = 0; columna < 10; columna++) {
      const index = fila * 10 + columna;
      if (!celdas[index].classList.contains("ocupado")) {
        completa = false;
        break;
      }
    }

    if (completa) {
      lineas++;
      borrarFila(fila);
    }
  }

  if (lineas > 0) {
    puntos += 100 * (lineas * lineas);
    const puntuacion = document.getElementById("puntuación") as HTMLParagraphElement;
    puntuacion.textContent = puntos + " puntos";
  }
}

// 5. PERDER

function perder(): boolean {
  for (let columna = 0; columna < 10; columna++) {
    if (celdas[columna].classList.contains("ocupado")) {
      return true;
    }
  }
  return false;
}

function mostrarGameOver() {
  juegoTerminado = true;
  clearInterval(intervalo);

  const panel = document.getElementById("gameover")!;
  panel.classList.remove("oculto"); 

  const boton = document.getElementById("reiniciar")!;
  boton.addEventListener("click", () => location.reload());
  if (puntos > 0){
    const puntosFinales = document.createElement("p");
    puntosFinales.textContent = `Puntuación final: ${puntos}`;
    panel.appendChild(puntosFinales);
  }
}

// 6. ROTACIÓN SEGURA

function puedeRotar(nuevaRot: number): boolean {
  const forma = piezaActual[nuevaRot];

  for (let fila = 0; fila < forma.length; fila++) {
    for (let columna = 0; columna < forma[fila].length; columna++) {
      if (forma[fila][columna] === 1) {
        const x = posicionHorizontal + columna;
        const y = posicionVertical + fila;

        if (x < 0 || x >= 10 || y >= 20) return false;

        const index = y * 10 + x;
        if (celdas[index].classList.contains("ocupado")) return false;
      }
    }
  }
  return true;
}

function puedeMover(desplazamiento: number): boolean {
  const forma = piezaActual[rotacion];

  for (let fila = 0; fila < forma.length; fila++) {
    for (let columna = 0; columna < forma[fila].length; columna++) {
      if (forma[fila][columna] === 1) {
        const x = posicionHorizontal + columna + desplazamiento;
        const y = posicionVertical + fila;

        if (x < 0 || x >= 10) return false;

        const index = y * 10 + x;
        if (celdas[index].classList.contains("ocupado")) return false;
      }
    }
  }
  return true;
}

// 7. BAJAR PIEZA

function bajar() {
  if (juegoTerminado) return;

  if (puedeBajar()) {
    posicionVertical++;
    dibujarPieza();
  } else {
    fijarPieza();
    comprobarLineas();

    if (perder()) {
      mostrarGameOver();
      return;
    }

    clearInterval(intervalo);
    nuevaRonda();
  }
}

// 8. NUEVA RONDA

function nuevaRonda() {
  posicionHorizontal = 3;
  posicionVertical = 0;
  rotacion = 0;

  const aleatorio = Math.floor(Math.random() * figuras.length);
  piezaActual = mapaFiguras[figuras[aleatorio]];

  dibujarPieza();
  intervalo = setInterval(bajar, 500);
}

// 9. CONTROLES

document.addEventListener("keydown", evento => {
  if (juegoTerminado) return;

  if (evento.code === "Space") {
    evento.preventDefault();
    const nuevaRot = (rotacion + 1) % piezaActual.length;
    if (puedeRotar(nuevaRot)) rotacion = nuevaRot;
  }

  if (evento.key === "ArrowLeft") {
    if (puedeMover(-1)) posicionHorizontal--;
  }

  if (evento.key === "ArrowRight") {
    if (puedeMover(1)) posicionHorizontal++;
  }

  if (evento.key === "ArrowDown") {
    bajar();
  }

  dibujarPieza();
});

// 10. INICIO

nuevaRonda();