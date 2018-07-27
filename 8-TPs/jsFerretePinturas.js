/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var centigrados;

	farenheit=document.getElementById('Temperatura').value;
	farenheit=parseInt(farenheit);

	centigrados=(farenheit-32)*0.5;

	alert(farenheit+" grados farenheit son "+centigrados+" grados celsius.");

}

function CentigradosFahrenheit () 
{
	var centigrados;
	var farenheit;

	centigrados=document.getElementById('Temperatura').value;
	centigrados=parseInt(centigrados);

	farenheit=(centigrados*1.8)+32;

	alert(centigrados+" grados centigrados son "+farenheit+" grados farenheit.");
}
