const personajes = [
	{
		"nombre" : "Jotaro",
        "stand" : "Star Platinum",
	},
	{
		"nombre" : "Joseph",
        "stand" : "Hermit Purple",
	},
	{
		"nombre" : "Avdool",
        "stand" : "Magician Red",
	},
	{
		"nombre" : "Polnareff",
        "stand" : "Silver Chariot",
	},
	{
		"nombre" : "Kakyoin",
        "stand" : "Hierophant Green",
	},
];

// Método corto
// console.log(personajes.find(p => p.nombre === "Jotaro").stand);

//Método largo
const personaje = personajes.find(p => p.nombre === "Jotaro");

if (personaje) console.log(personaje.stand);