
function mostrar()
{
	var largo;
	var ancho;
	var perimetro;

	largo=prompt("Ingrese el largo de un rectangulo:");
	ancho=prompt("Ingrese el ancho de un rectangulo:");
	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=largo*2+ancho*2;

	alert("El perimetro es: "+perimetro);
}
