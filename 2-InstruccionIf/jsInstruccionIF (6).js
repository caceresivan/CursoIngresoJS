function mostrar()
{
	//tomo la edad  
		/*Forma Pro mejorada*/

		var edad;
	edad=document.getElementById('edad').value;

	if (edad<13)
	{
		alert("Usted es menor");
	}
	else
	{
		if (edad>17)
		{
			alert("Usted es mayor");

		}else
			alert("Usted es adolescente");
	}

	/*
	forma "Disney"


	var edad;
	edad=document.getElementById('edad').value;

	if (edad<13)
	{
		alert("Usted es un niño");
	}
	if (edad>12 && edad<18)
	{
		alert("Usted es adolescente");
	}
	if (edad>17)
	{
		alert("Usted es mayor de edad");
	}*/

	/*
	bien echo pero forma mas dificil

	var edad;
	edad=document.getElementById('edad').value;

	if (edad<13)
	{
		alert("Usted es un niño");
	}else
	{
		if (edad>12 && edad<18)
		{
			alert("Usted es adolescente");
		}else
		{
			alert("Usted es mayor");
		}*/
}//FIN DE LA FUNCIÓN