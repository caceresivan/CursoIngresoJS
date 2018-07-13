/*se ingresan tres numeros,
se muestra la suma de los tres,
el promedio de los tres y la
resta de los tres en un solo alert
*/
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base=prompt("Ingrese la base");
	altura=prompt("Ingrese la altura");
	base=parseInt(base);
	altura=parseInt(altura);

	superficie=base*altura/2;
	perimetro=base*3;

	alert("La superficie del triangulo es: "+superficie+" y el perimetro es: "+perimetro);
}
