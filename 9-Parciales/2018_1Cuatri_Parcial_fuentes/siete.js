/*
maria f 15
jose m 33
fer f 25
*/
function mostrar()
{
	var contador=0;
	var nombre;
	var sexo;
	var edad;
	var cantMujeres=0;
	var cantVarones=0;
	var cantMenores=0;
	var cantMayores=0;
	var suma;

	while(contador<3)
	{
		
		nombre=prompt("Ingrese un nombre.");
		sexo=prompt("Ingrese su sexo.");

		while(sexo!= "f" && sexo!= "m")
		{
			sexo=prompt("Error, ingrese su sexo.");
		}

		edad=prompt("Ingrese su edad.");
		edad=parseInt(edad);
		while(isNaN(edad) || edad<0 && edad>100)
		{
			edad=prompt("Error, ingrese su edad.");
			edad=parseInt(edad);
		}
		contador++;
		
	}
	if(sexo=="f")
	{
		if(cantMujeres==1)
		{
	
		}
		cantMujeres++;	
	}
	else
	{
		cantVarones++;
	}
	if(edad<18 && edad>0)
	{
		cantMenores++;
	}
	else if(edad>17 && edad<100)
	{
		cantMayores++;
	}

	document.write("1.<br>Cantidad de mujeres= "+cantMujeres+"<br>Cantidad de varones= "+cantVarones+"<br>Cantidad de menores= "+cantMenores+"<br>Cantidad de mayores= "+cantMayores);

//esta todo mal;
}
