function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var numeroIngresado;
	var respuesta='si';

	maximo=-999999;
	minimo=999999;

	while(respuesta!='no')
	{
		

		numeroIngresado=prompt("Ingrese un numero.");
		numeroIngresado=parseInt(numeroIngresado);

		contador++;

		if(contador==1){
			maximo=numeroIngresado
			minimo=numeroIngresado
		}else(){

		}
		if(numeroIngresado>maximo)
		{
			maximo=numeroIngresado;
		}

		respuesta=prompt("Ingrese no para salir.");
	
		}if(numeroIngresado<minimo){
		minimo=numeroIngresado;

		respuesta=prompt("Ingrese no para salir.");
		}

	
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


//Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo.
}//FIN DE LA FUNCIÓN