const numeroAleatorio: number = Math.floor(Math.random() * 1010) + 1;

async function ahorcado() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`);
        const pokemon = await response.json();

        const nombrePokemon: string = pokemon.name;
        const imagen: string = pokemon.sprites.front_default;

        let pokemonGuiones: string[] = nombrePokemon.split("").map(caracter => {
            if (/^[a-zA-Z]$/.test(caracter)) {
                return "_";
            } else {
                return caracter;
            }
        });

        let contadorVidas: number = 0;
        const pantalla= document.getElementById("nombre") as HTMLHeadingElement;
        const imagenAhorcado = document.getElementById("imagenAhorcado") as HTMLImageElement;
        const imagenPokemon = document.getElementById("imagenPokemon") as HTMLImageElement;
        const letrasUtilizadas = document.getElementById("letrasUsadas") as HTMLParagraphElement;
        pantalla.textContent = pokemonGuiones.join(" ");
        console.log("Pokemon:", nombrePokemon);
        let letrasUsadas: string[] = [];

        function comprobarLetra(letra: string){
            const letraMinus : string = letra.toUpperCase();
            const palabraMinus : string[] = nombrePokemon.toUpperCase().split("");
            let contador: number = 0;
            let existe: boolean = false;
            
            if (letrasUsadas.includes(letra)) return;
            letrasUsadas.push(letra);
            letrasUtilizadas.textContent = `Las letras utilizadas han sido: ${letrasUsadas}`

        for (let posicion of palabraMinus){
                if (posicion === letraMinus){
                    pokemonGuiones[contador] = letraMinus;
                    existe = true;
                    pantalla.textContent = pokemonGuiones.join(" ");
                    if (!pokemonGuiones.includes("_")){
                    pantalla.textContent = "¡Has ganado!";
                    imagenPokemon.src = `${imagen}`;
                    }
                }
               contador++
        }
        
        if (!existe) {
            contadorVidas++;
            imagenAhorcado.src = `img/ahorcado${contadorVidas}.png`;
        }

        }

        document.addEventListener("keydown", (event: KeyboardEvent) => {
            if (contadorVidas >= 6){
                pantalla.textContent = `Has perdido. Era ${nombrePokemon}`;
                return;
            }
            if (!pokemonGuiones.includes("_")) return;

            const tecla = event.key;

            if (/^[a-zA-Z]$/.test(tecla)) {
                comprobarLetra(tecla);
            }
        });

    } catch (error) {
        console.error("Error al cargar los personajes:", error);
    }
}

ahorcado()