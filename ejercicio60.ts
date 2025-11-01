const jojos = [
	{
		"nombre" : "Jonathan Joestar",
        "país" : "Inglaterra",
	},
	{
		"nombre" : "Joseph Joestar",
        "país" : "EEUU",
	},
	{
		"nombre" : "Jotaro Kujo",
        "país" : "Japón",
	},
	{
		"nombre" : "Josuke Higashikata",
        "país" : "Japón",
	},
	{
		"nombre" : "Giorno giovanna",
        "país" : "Italia",
	},
	{
		"nombre" : "Jolyne Cujoh",
        "país" : "EEUU",
	},
	{
		"nombre" : "Jhonny Joestar",
        "país" : "EEUU",
	},
];

// Método corto
// console.log(jojos.filter(p => p.país === "EEUU"));

//Método largo
const procedencia = jojos.filter(p => p.país === "EEUU");

if (procedencia) console.log(procedencia);