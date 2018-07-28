function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;
	var promedio;

	while(respuesta != "no")
	{

	numeroIngresado=prompt("Ingrese un numero.");
	numeroIngresado=parseInt(numeroIngresado);

	acumulador=acumulador+numeroIngresado;
	contador++;
	respuesta=prompt("Quiere continuar?");
	}
	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN