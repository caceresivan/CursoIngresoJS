/*
al presionar el botón 
pedir la cantidad de veces que quiero 
repetir el mensaje "Hola UTN FRA"
*/

function mostrar()
{

	var repeticiones=prompt("ingrese el número de repeticiones");
	var contador;

	
	repeticiones=parseInt(repeticiones);

	for(contador=0;contador<repeticiones;contador++)
	{
		console.log("Hola UTN FRA.");
	}



}//FIN DE LA FUNCIÓN