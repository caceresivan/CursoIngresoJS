/*
tomar los datos de los cuadros de texto y formar la frase
"Yo soy xxxx, vivo en al localidad de xxxxxxx
y estudio en la UTN"



*/


function mostrar()
{
	var nombre;
	var localidad;

	nombre=document.getElementById('elNombre').value;
	localidad=document.getElementById('laLocalidad').value;

	alert("Yo soy "+nombre+" ,vivo en la localidad de "+localidad+" y estudio en la UTN.");
	

}
