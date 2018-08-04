/*
Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".
*/


function mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var resta;

	numeroUno=prompt("Ingrese un numero.");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese un numero.");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos){
		alert("El resultado es: "+numeroUno+numeroDos);
	}
	else if(numeroUno>numeroDos){
		resta=numeroUno-numeroDos;
			alert("El resultado es: "+resta);
	}else{
		suma=numeroUno+numeroDos;
		if(suma>10){
			alert("El resultado es: "+suma+" y supero el 10.");
		}
		else{
			alert("El resultado es: "+suma);
		}	

	}//else
	
}
