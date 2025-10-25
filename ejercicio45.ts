const cadena : string[] = ["Manzana", "Cereza", "Mandarina", "Melocotón", "Pera", "Kiwi", "Ciruela", "Uva", "Nectarina", "Mango"];
const numero : number = Math.floor(Math.random() * cadena.length);

function elegirFruta (cadena:string[], numero:number){
    console.log(`La fruta elegida es: ${cadena[numero]}`);
}

elegirFruta(cadena, numero);