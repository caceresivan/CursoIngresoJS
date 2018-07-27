/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var cuenta;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	
		numeroSecreto=Math.random();
		numeroSecreto*=100;
		numeroSecreto=Math.round(numeroSecreto);
		numeroSecreto++;
		alert(numeroSecreto);
}

function verificar()
{
	var numeroIngresado;

	if(contadorIntentos==cuenta)
	{
		contadorIntentos=0;
	}
	contadorIntentos++;
	document.getElementById('intentos').value=contadorIntentos;

	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);

	if(numeroIngresado<1 || numeroIngresado>100)
	{
		alert("Debe ingresar un numero entre 1 y 100, vuelva a intentarlo.");
	}
	if(numeroSecreto==numeroIngresado)
	{
		alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos.");
	}
	if(numeroSecreto<numeroIngresado)
	{
		alert("El numero ingresado es mayor al numero a adivinar!!");
	}
	if(numeroSecreto>numeroIngresado)
	{
		alert("El numero ingresado es menor al numero a adivinar!!");
	}
}