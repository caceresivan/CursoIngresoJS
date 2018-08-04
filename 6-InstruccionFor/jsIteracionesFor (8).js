/*
al presionar el botón pedir un número. 
Informar si el numero es PRIMO o no.
*/

function mostrar()
{
	var numeroIngresado;
	var numerosAnteriores;
	var numerosRecorridos;
	var contadorDeDivisores;

	numeroIngresado=prompt("Ingrese numero.");
	numeroIngresado=parseInt(numeroIngresado);


	for(numerosRecorridos=numeroIngresado;numerosRecorridos>1;numerosRecorridos--)
	{
		contadorDeDivisores=0;
		for(numerosAnteriores=numerosRecorridos-1;numerosAnteriores>1;numerosAnteriores--)
		{
			if(numerosRecorridos%numerosAnteriores==0)
			{
				contadorDeDivisores++;
			}
		}
		if(contadorDeDivisores==0)
		{
			console.log(numerosRecorridos+" es primo.");
		}
	}
		
	


}//FIN DE LA FUNCIÓN