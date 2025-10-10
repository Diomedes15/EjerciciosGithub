let numeroAleatorio: number = Math.round(Math.random()*10);

const intento1 = Number(prompt("Intenta adivinar el número comprendido entre 1 y 10:"));

if (numeroAleatorio === intento1) {
  alert(`Has acertado, el número era: ${numeroAleatorio}`);
} else {
  const intento2 = Number(prompt("Inténtalo de nuevo:"));

  if (numeroAleatorio === intento2) {
    alert(`Has acertado, el número era: ${numeroAleatorio}`);
  } else {
    const intento3 = Number(prompt("Último intento:"));

    if (numeroAleatorio === intento3) {
      alert(`Has acertado, el número era: ${numeroAleatorio}`);
    } else {
      alert(`NO has acertado, el número era: ${numeroAleatorio}`);
    }
  }
}

