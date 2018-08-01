/*se ingresan tres numeros,
se muestra la suma de los tres,
el promedio de los tres y la
resta de los tres en un solo alert
*/
function mostrar()
{
	var base;
	var altura;
	var perimetro;
	var superficie;

	base=prompt("Ingrese base.");
	altura=prompt("Ingrese altura.");

	base=parseInt(base);
	altura=parseInt(altura);

	perimetro=base*3;
	superficie=(base*altura)/2;

	alert("La superficie es: "+superficie+" y el perimetro es: "+perimetro);
}
