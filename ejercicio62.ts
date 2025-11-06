const jojos = [
	{
		"nombre" : "Joseph Joestar",
        "stand": "Hermit Purple",
        "equipo" : "jojo",
	},
	{
		"nombre" : "Jotaro Kujo",
        "stand": "Star Platinum",
        "equipo" : "jojo",
	},
	{
		"nombre" : "Dio",
        "stand": "The World",
        "equipo" : "dio",
	},
	{
		"nombre" : "Vanilla Ice",
        "stand": "Cream",
        "equipo" : "dio",
	},
	{
		"nombre" : "Noriaki Kakyoin",
        "stand": "Hierophant Green",
        "equipo" : "jojo",
	},
];

const equipo : string[] = jojos.filter(j => j.equipo === "jojo").map(p => p.nombre);

console.log(equipo);