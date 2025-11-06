const jojos = [
	{
		"nombre" : "Joseph Joestar",
        "altura": 200
	},
	{
		"nombre" : "Jotaro Kujo",
        "altura": 195
	},
	{
		"nombre" : "Dio",
        "altura": 195
	},
	{
		"nombre" : "Vanilla Ice",
        "altura": 190
	},
	{
		"nombre": "Noriaki Kakyoin",
        "altura": 178
	},
];

const media : number = jojos.reduce((acumulador, personaje) => acumulador + personaje.altura, 0) / jojos.length;

console.log(media);