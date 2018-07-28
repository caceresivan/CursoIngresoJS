function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var sumaNegativos=0;
	var sumaPositivos=0;
	var contPositivos=0;
	var contNegativos=0;
	var contCeros=0;
	var contPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPosyNeg;
	var numeroIngresado;
	var acumPositivos=0;

	while(respuesta!="no")
	{
		numeroIngresado=prompt("Ingrese un numero.");
		numeroIngresado=parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("Ingrese un numero.");
			numeroIngresado=parseInt(numeroIngresado);
		}
		if(numeroIngresado>0)
		{
			contPositivos++;
			acumPositivos=numeroIngresado;
		}else if(numeroIngresado<0)
		{
			contNegativos++;
		}else()
		{
			contCeros++;
		}
	}//while(respuesta)




}//FIN DE LA FUNCIÓN