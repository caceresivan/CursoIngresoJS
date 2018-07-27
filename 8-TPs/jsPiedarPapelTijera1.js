/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;


function comenzar()
{
	eleccionMaquina=Math.random();
	eleccionMaquina*=3;
	eleccionMaquina=Math.round(eleccionMaquina);
	eleccionMaquina=Math.ceil(eleccionMaquina);
	alert(eleccionMaquina);



}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina)
	{
		case 1:
			alert("Hay un empate.");
				break;
		case 2:
			alert("Has perdido.");
				break;
		case 3:
			alert("Has ganado.");
				break;				
	}

	

}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina)
	{
		case 1:
			alert("Has ganado.");
				break;
		case 2:
			alert("Hay un empate.");
				break;
		case 3:
			alert("Has perdido.");
				break;				
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina)
	{
		case 1:
			alert("Has perdido.");
				break;
		case 2:
			alert("Has ganado.");
				break;
		case 3:
			alert("Hay un empate.");
				break;				
	}
}//FIN DE LA FUNCIÓN